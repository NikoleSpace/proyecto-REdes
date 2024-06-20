const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    name: { type: String, required: true },
    branch_id: { type: Schema.Types.ObjectId, ref: 'Branch' }
});

module.exports = mongoose.model('Department', departmentSchema);
