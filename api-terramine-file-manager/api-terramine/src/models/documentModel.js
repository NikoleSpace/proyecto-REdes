const mongoose = require('mongoose');
const { Schema } = mongoose;

const documentSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  creation_date: { type: Date, default: Date.now },
  modification_date: { type: Date },
  author_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  size: { type: Number, required: true },
  file: { data: Buffer, contentType: String },
  folder_path: { type: String, required: false },
  folder_id: { type: Schema.Types.ObjectId, ref: 'Folder', required: false }
});

module.exports = mongoose.model('Document', documentSchema);