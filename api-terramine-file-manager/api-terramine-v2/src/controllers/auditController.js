const Audit = require('../models/Audit');

exports.createAudit = async (req, res) => {
    const { title, description, scheduled_date, branch_id, created_by } = req.body;
    try {
        const audit = new Audit({ title, description, scheduled_date, branch_id, created_by });
        await audit.save();
        res.status(201).send({ message: "Audit created successfully", audit_id: audit._id });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAudits = async (req, res) => {
    try {
        const audits = await Audit.find();
        res.status(200).send(audits);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateAudit = async (req, res) => {
    const { title, description, scheduled_date, status } = req.body;
    try {
        await Audit.findByIdAndUpdate(req.params.id, { title, description, scheduled_date, status });
        res.status(200).send({ message: "Audit updated successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteAudit = async (req, res) => {
    try {
        await Audit.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Audit deleted successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};
