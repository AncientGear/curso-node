'use strict'
const Producto = require('../models/productos');

const crearProducto = (req, res) => {
    const body = req.body;

    console.log(body);
    

    const producto = new Producto({
        nombre: body.nombre,
        precio: body.precio,
        descripcion: body.descripcion,
        usuario: req.usuario.id
    });
    console.log(producto);
    
    producto.save((err, productoGuardado) => {
        if(err) {
            return res.status(500).send({
                status: false,
                mensaje: 'Hubo un error en el servidor'
            })
        }

        return res.status(201).send({
            status: true,
            producto: productoGuardado
        });
    })
}

const obtenerProductos = (req, res) => {
    Producto.find((err, productos) => {
        if(err) {
            return res.status(500).send({
                status: false,
                mensaje: 'Hubo un error en el servidor'
            })
        }

        if(productos.length === 0){
            return res.status(404).send({
                status: false,
                mensaje: 'No se encontró ningún producto'
            })
        }

        return res.status(201).send({
            status: true,
            productos
        });
    })
}

const obtenerProductoById = (req, res) => {
    const _id = req.params.id;
    console.log(_id);
    
    Producto.findOne({_id}, (err, producto) => {
        if(err) {
            return res.status(500).send({
                status: false,
                mensaje: 'Hubo un error en el servidor'
            })
        }
        console.log(producto);
        
        if(!producto) {
            return res.status(404).send({
                status: false,
                mensaje: 'No se encontró el producto'
            })
        }

        return res.status(200).send({
            status: 200,
            producto
        })
    })
}

module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProductoById
}