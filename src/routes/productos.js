'use strict'

const express = require('express');
const ControladorProducto = require('../controllers/productos');

const router = express();

router.post('/crearProducto', ControladorProducto.crearProducto);
router.get('/obtenerProductos', ControladorProducto.obtenerProductos);
router.get('/obtenerProductoById/:id', ControladorProducto.obtenerProductoById);

module.exports = router;