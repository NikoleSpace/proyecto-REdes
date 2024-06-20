const mongoose = require('mongoose');
const { Schema } = mongoose;

const permissionSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String }
});

module.exports = mongoose.model('Permission', permissionSchema);