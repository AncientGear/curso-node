'use strict'

const { generarToken } = require('../utils/generateToken');
const { generarHash } = require('../utils/generarHash');

const UsersModel = require('../models/user');

const createUser = async (req, res) => {
    const { body } = req;
    
    let user = new UsersModel();

    user.name = body.name;
    user.email = body.email;
    user.password = await generarHash(body.password);

    try{
        await user.save();
    } catch(err){
        return res.status(500).send({
            status: false,
            message: 'User cannot be created'
        })
    }

    res.send({
        user,
        message: 'Working'
    })
}

const getUser = (req, res) => {
    const id = req.params.id;
    
    UsersModel.findOne({_id: id}, (err, user) => {
        if(err) {
            return res.status(500).send({
                status: false,
                message: 'Internal Server Error.'
            })
        }

        if(!user) {
            return res.status(404).send({
                status: true,
                message: 'User Not Found'
            })
        }

        res.status(200).send({
            status: true,
            user
        })
    });
}

const updateUser = (req, res) => {
    const _id = req.params.id;
    const body = req.body;

    UsersModel.findOne({_id}, (err, user) => {
        if(!user) {
            return res.status(404).send({
                status: true,
                message: 'User Not Found'
            })
        }

        if(err) {
            return res.status(500).send({
                status: false,
                message: 'Internal Server Error.'
            })
        }

        if(body.name) user.name = body.name;
        if(body.email) user.email = body.email;
        if(body.password) user.password = body.password;
        if(body.role) user.role = body.role;

        user.save((err, userUpdated) => {
            if(!userUpdated) {
                return res.status(400).send({
                    status: true,
                    message: 'User Cannot Be Updated'
                })
            }

            if(err) {
                return res.status(500).send({
                    status: false,
                    message: 'Internal Server Error.'
                })
            }

            return res.status(200).send({
                status: true,
                user: userUpdated
            })
        })
    });
}

const deleteUser = (req, res) => {
    const _id = req.params.id;

    UsersModel.findByIdAndDelete(_id, (err, userDeleted) => {
        if(!userDeleted) {
            return res.status(404).send({
                status: true,
                message: 'User Not Found'
            })
        }

        if(err) {
            return res.status(500).send({
                status: false,
                message: 'Internal Server Error.'
            })
        }

        return res.status(200).send({
            status: true,
            user: userDeleted
        })
    })
}

const login = (req, res) => {
    const body = req.body;

    const email = body.email;
    const password = body.password;

    UsersModel.findOne({email}, (err, user) => {
        if(!user) {
            return res.status(401).send({
                status: true,
                message: '{Usuario} o contraseña incorrectos'
            })
        }

        if(err) {
            return res.status(500).send({
                status: false,
                message: 'Internal Server Error.'
            })
        }

        if(password !== user.password) {
            return res.status(401).send({
                status: true,
                message: 'Usuario o {contraseña} incorrectos'
            })
        }

        const datos = {
            email: user.email,
            id: user._id,
            role: user.role
        }

        const token = generarToken(datos);

        return res.status(200).send({
            status: true,
            token,
            usuario: user
        })
    })
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    login
}