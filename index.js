'use strict'
const mongoose = require('mongoose');

const app = require('./app');

const optionsMongo = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect('mongodb://localhost:27017/curso', optionsMongo ,(err) => {
    if(err) throw err;

    app.listen(3000, () => {
        console.log('Server running');
    });
})