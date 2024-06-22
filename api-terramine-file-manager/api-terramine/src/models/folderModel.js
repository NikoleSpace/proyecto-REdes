// models/folderModel.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const folderSchema = new Schema({
  name: { type: String, required: true },
  path: { type: String, required: true },
  parent_folder: { type: Schema.Types.ObjectId, ref: 'Folder', default: null }
});

module.exports = mongoose.model('Folder', folderSchema);
