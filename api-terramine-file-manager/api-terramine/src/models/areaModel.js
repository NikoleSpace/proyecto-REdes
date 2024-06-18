const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Lista de empleados que pertenecen a esta área
});

module.exports = mongoose.model('Area', areaSchema);
