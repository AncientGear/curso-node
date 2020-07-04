'use strict'

const bcrypt = require('bcrypt');

const generarHash = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    
    return hash;
}

module.exports = {
    generarHash
}