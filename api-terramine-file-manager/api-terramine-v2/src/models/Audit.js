const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auditSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    scheduled_date: { type: Date, required: true },
    status: { type: String, required: true },
    created_by: { type: Schema.Types.ObjectId, ref: 'User' },
    branch_id: { type: Schema.Types.ObjectId, ref: 'Branch' }
});

module.exports = mongoose.model('Audit', auditSchema);
