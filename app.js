'use strict'

// =======================
// Dependencies imports
// =======================
const express = require('express');
const cors = require('cors');

// =======================
// Development imports
// =======================

// =======================
// Routes imports
// =======================
const userRoutes = require('./src/routes/user');
const productoRoutes = require('./src/routes/productos');

const app = express();

// =======================
// Middlewares
// =======================
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// =======================
// CORS
// =======================
app.use(cors());

// =======================
// Use of Routes
// =======================
app.use('/v1',userRoutes);
app.use('/v1', productoRoutes);

// =======================
// Export app
// =======================
module.exports = app;