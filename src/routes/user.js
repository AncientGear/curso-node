'use strict'
const express = require('express');

const UserController = require('../controllers/user');

const router = express.Router();

router.post('/createUser', UserController.createUser);
router.get('/getUser/:id', UserController.getUser);
router.put('/updateUser/:id', UserController.updateUser);
router.delete('/deleteUser/:id', UserController.deleteUser);

module.exports = router;