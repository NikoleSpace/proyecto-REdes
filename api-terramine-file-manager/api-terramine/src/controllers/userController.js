const User = require('../models/userModel');
const Area = require('../models/areaModel');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, phone, position, area_id, branch_id, role_id, credential_expiry_date } = req.body;
    // Verificar si el area_id es válido
    const area = await Area.findById(area_id);
    if (!area) {
      return res.status(400).json({ error: 'Invalid area ID: Area does not exist' });
    }
    // Encriptamos la contraseña antes de guardarla
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // Creamos el usuario
    const user = new User({
      name,
      email,
      password:hashedPassword,
      phone,
      position,
      area_id,
      branch_id,
      role_id,
      credential_expiry_date
    });
    
    // Guardamos el usuario en la base de datos
    await user.save();

    // Añadimos el usuario a la lista de empleados del área correspondiente
    area.employees.push(user._id);
    await area.save();
    
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
