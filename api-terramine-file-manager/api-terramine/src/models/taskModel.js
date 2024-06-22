const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
    employee_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    manager_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    due_date: { type: Date, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
