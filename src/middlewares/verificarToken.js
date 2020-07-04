'use strict'
require('../../config/env');

const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if(err) {
            return res.status(401).send({
                status: false,
                message: 'Invalid Token'
            })
        }
        req.usuario = decoded.datos;
        console.log(decoded);
        next();
    })
}

module.exports = {
    verificarToken
}