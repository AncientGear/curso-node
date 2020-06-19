'use strict'
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre no fue enviado']
    },
    email: {
        type: String,
        required: [true, 'El email no fue enviado'],
        unique: [true, 'El email ya está siendo usado']
    },
    password: {
        type: String,
        required: [true, 'La contraseña no fue enviado']
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: ['USER_ROLE', 'ADMIN_ROLE']
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('users', userSchema);