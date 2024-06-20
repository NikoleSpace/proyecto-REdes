const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auditFindingSchema = new Schema({
    audit_id: { type: Schema.Types.ObjectId, ref: 'Audit' },
    description: { type: String, required: true },
    severity: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('AuditFinding', auditFindingSchema);
