'use strict'
require('dotenv').config();
require('./config/config');
const mongoose = require('mongoose');

const app = require('./app');
const optionsMongo = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_URL, optionsMongo,(err) => {
    if(err) throw new Error('Cannot connect to the database');

    console.log('Connection succesfully');
    try{
        app.listen(process.env.PORT, () => {
            console.log('Server running');
        });
    } catch(err) {
        throw new Error(err);
    }
});