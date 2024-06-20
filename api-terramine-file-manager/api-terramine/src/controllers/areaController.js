const Area = require('../models/areaModel');
const User = require('../models/userModel');

// Controlador para crear un área
exports.createArea = async (req, res) => {
  try {
    const { name, description } = req.body;
    const area = new Area({ name, description });
    await area.save();
    res.status(201).json(area);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obtener todas las áreas
exports.getAllAreas = async (req, res) => {
  try {
    const areas = await Area.find();
    res.status(200).json(areas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener un área por su ID
exports.getAreaById = async (req, res) => {
  try {
    const area = await Area.findById(req.params.id);
    if (!area) {
      return res.status(404).json({ error: 'Area not found' });
    }
    res.status(200).json(area);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar un área por su ID
exports.updateAreaById = async (req, res) => {
  try {
    const { name, description } = req.body;
    const area = await Area.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
    if (!area) {
      return res.status(404).json({ error: 'Area not found' });
    }
    res.status(200).json(area);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar un área por su ID
exports.deleteAreaById = async (req, res) => {
  try {
    const area = await Area.findByIdAndDelete(req.params.id);
    if (!area) {
      return res.status(404).json({ error: 'Area not found' });
    }
    res.status(200).json({ message: 'Area deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

