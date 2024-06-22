// routes/auth.js

const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// Ruta para el registro de usuario
router.post('/register', authController.registerUser);

// Ruta para el login de usuario
router.post('/login', authController.loginUser);

module.exports = router;
