const Branch = require('../models/branchModel');

// Controlador para crear una nueva sucursal
exports.createBranch = async (req, res) => {
  try {
    const branch = new Branch(req.body);
    await branch.save();
    res.status(201).json(branch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obtener todas las sucursales
exports.getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener una sucursal por su ID
exports.getBranchById = async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);
    if (!branch) {
      return res.status(404).json({ error: 'Branch not found' });
    }
    res.status(200).json(branch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar una sucursal por su ID
exports.updateBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!branch) {
      return res.status(404).json({ error: 'Branch not found' });
    }
    res.status(200).json(branch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar una sucursal por su ID
exports.deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.params.id);
    if (!branch) {
      return res.status(404).json({ error: 'Branch not found' });
    }
    res.status(200).json({ message: 'Branch deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
