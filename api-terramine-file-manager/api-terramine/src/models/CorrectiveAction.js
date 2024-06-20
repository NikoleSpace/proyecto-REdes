const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const correctiveActionSchema = new Schema({
    finding_id: { type: Schema.Types.ObjectId, ref: 'AuditFinding' },
    description: { type: String, required: true },
    responsible_user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    due_date: { type: Date, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('CorrectiveAction', correctiveActionSchema);
