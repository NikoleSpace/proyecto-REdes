const mongoose = require('mongoose');
const { Schema } = mongoose;

const documentSchema = new mongoose.Schema({
  name: String,
  description: String,
  creation_date: { type: Date, default: Date.now },
  modification_date: Date,
  author_id: { type: Schema.Types.ObjectId, ref: 'User' }, // Changed to String
  size: Number,
  file: { data: Buffer, contentType: String } // Stores the file in binary form
});

module.exports = mongoose.model('Document', documentSchema);
