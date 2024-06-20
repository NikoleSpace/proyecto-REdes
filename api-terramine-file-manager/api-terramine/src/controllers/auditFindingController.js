const AuditFinding = require('../models/AuditFinding');

exports.createAuditFinding = async (req, res) => {
    const { audit_id, description, severity, status } = req.body;
    try {
        const auditFinding = new AuditFinding({ audit_id, description, severity, status });
        await auditFinding.save();
        res.status(201).send({ message: "Audit finding created successfully", finding_id: auditFinding._id });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAuditFindings = async (req, res) => {
    try {
        const auditFindings = await AuditFinding.find();
        res.status(200).send(auditFindings);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateAuditFinding = async (req, res) => {
    const { description, severity, status } = req.body;
    try {
        await AuditFinding.findByIdAndUpdate(req.params.id, { description, severity, status });
        res.status(200).send({ message: "Audit finding updated successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteAuditFinding = async (req, res) => {
    try {
        await AuditFinding.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Audit finding deleted successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};
