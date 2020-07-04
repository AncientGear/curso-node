'use strict'

const express = require('express');
const ControladorProducto = require('../controllers/productos');
const { verificarToken } = require('../middlewares/verificarToken');
const { verificarAdmin } = require('../middlewares/verificarAdmin');

const router = express();

router.post('/crearProducto', [verificarToken, verificarAdmin],ControladorProducto.crearProducto);
router.get('/obtenerProductos', ControladorProducto.obtenerProductos);
router.get('/obtenerProductoById/:id', ControladorProducto.obtenerProductoById);

module.exports = router;