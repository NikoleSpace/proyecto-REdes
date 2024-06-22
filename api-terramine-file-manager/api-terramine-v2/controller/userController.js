// controllers/userController.js
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');


// Controlador para obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Controlador para obtener un usuario por su ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Controlador para actualizar un usuario por su ID
exports.updateUser = async (req, res) => {
    const { username, email, telefono, cargo, sucursal_id, area_id, roles } = req.body;

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.username = username;
        user.email = email;
        user.telefono = telefono;
        user.cargo = cargo;
        user.sucursal_id = sucursal_id;
        user.area_id = area_id;
        user.roles = roles;

        await user.save();
        res.json({ msg: 'User updated', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Controlador para eliminar un usuario por su ID
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json({ msg: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
