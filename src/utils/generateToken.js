'use strict'
require('../../config/env');

const jwt = require('jsonwebtoken');

const generarToken = (datos) => {
    const token = jwt.sign({
        datos
    }, process.env.SEED, {
        expiresIn: '2h',
        algorithm: 'HS256'
    });

    return token;
}

module.exports = {
    generarToken
}