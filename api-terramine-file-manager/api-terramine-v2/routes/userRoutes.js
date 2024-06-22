const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Importa el middleware de autenticación

// Rutas CRUD para usuarios protegidas con JWT
router.get('/users', authMiddleware, userController.getAllUsers); // Protege la ruta GET para obtener todos los usuarios
router.get('/users/:id', authMiddleware, userController.getUserById); // Protege la ruta GET para obtener un usuario por ID
router.put('/users/:id', authMiddleware, userController.updateUser); // Protege la ruta PUT para actualizar un usuario por ID
router.delete('/users/:id', authMiddleware, userController.deleteUser); // Protege la ruta DELETE para eliminar un usuario por ID

module.exports = router;
