'use strict'
require('./config/env');
const mongoose = require('mongoose');

const app = require('./app');

const optionsMongo = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true}

mongoose.connect(process.env.URLDB, optionsMongo ,(err) => {
    if(err) throw err;
    console.log('Conectado');
    
    app.listen(3000, () => {
        console.log('Server running');
    });
})