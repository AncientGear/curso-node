const mongoose = require('mongoose');

const schema = mongoose.Schema;

const modeloProductos = new schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es requerido']
    },
    precio:{
        type: Number,
        required: [true, 'El precio del producto es requerido']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es requerida']
    },
    usuario: {
        type: schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'El id del usuario es requerido']
    }
});

module.exports = mongoose.model('products', modeloProductos);