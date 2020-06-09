'use strict'
// =======================
// Dependencies
// =======================
const express = require('express');
const cors = require('cors');
// =======================
// Import of routes
// =======================

// =======================
// Our dependencies
// =======================

const app = express();

// =======================
// Middleware
// =======================
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// =======================
// CORS
// =======================
app.use(cors());

// =======================
// Use of routes
// =======================


// =======================
// Export of app
// =======================
module.exports = app;