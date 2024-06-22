// controllers/folderController.js
const Folder = require('../models/folderModel');

// Create a new folder
exports.createFolder = async (req, res) => {
  try {
    const { name, path, parent_folder } = req.body;
    const folder = new Folder({ name, path, parent_folder });
    await folder.save();
    res.status(201).send(folder);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all folders
exports.getAllFolders = async (req, res) => {
  try {
    const folders = await Folder.find();
    res.status(200).send(folders);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get a folder by ID
exports.getFolderById = async (req, res) => {
  try {
    const folder = await Folder.findById(req.params.id);
    if (!folder) {
      return res.status(404).send();
    }
    res.status(200).send(folder);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update a folder
exports.updateFolder = async (req, res) => {
  try {
    const { name, path, parent_folder } = req.body;
    const folder = await Folder.findByIdAndUpdate(req.params.id, {
      name,
      path,
      parent_folder
    }, { new: true, runValidators: true });
    if (!folder) {
      return res.status(404).send();
    }
    res.status(200).send(folder);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a folder
exports.deleteFolder = async (req, res) => {
  try {
    const folder = await Folder.findByIdAndDelete(req.params.id);
    if (!folder) {
      return res.status(404).send();
    }
    res.status(200).send(folder);
  } catch (error) {
    res.status(400).send(error);
  }
};
