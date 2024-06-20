const Permission = require('../models/permissionModel');

// Create a new permission
exports.createPermission = async (req, res) => {
  try {
    const permission = new Permission(req.body);
    await permission.save();
    res.status(201).json(permission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all permissions
exports.getAllPermissions = async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.json(permissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a permission by ID
exports.getPermissionById = async (req, res) => {
  try {
    const permission = await Permission.findById(req.params.id);
    if (permission) {
      res.json(permission);
    } else {
      res.status(404).json({ message: 'Permission not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a permission
exports.updatePermission = async (req, res) => {
  try {
    const permission = await Permission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (permission) {
      res.json(permission);
    } else {
      res.status(404).json({ message: 'Permission not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a permission
exports.deletePermission = async (req, res) => {
  try {
    const permission = await Permission.findByIdAndDelete(req.params.id);
    if (permission) {
      res.json({ message: 'Permission deleted' });
    } else {
      res.status(404).json({ message: 'Permission not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};