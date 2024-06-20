const CorrectiveAction = require('../models/CorrectiveAction');

exports.createCorrectiveAction = async (req, res) => {
    const { finding_id, description, responsible_user_id, due_date, status } = req.body;
    try {
        const correctiveAction = new CorrectiveAction({ finding_id, description, responsible_user_id, due_date, status });
        await correctiveAction.save();
        res.status(201).send({ message: "Corrective action created successfully", action_id: correctiveAction._id });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getCorrectiveActions = async (req, res) => {
    try {
        const correctiveActions = await CorrectiveAction.find();
        res.status(200).send(correctiveActions);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateCorrectiveAction = async (req, res) => {
    const { description, due_date, status } = req.body;
    try {
        await CorrectiveAction.findByIdAndUpdate(req.params.id, { description, due_date, status });
        res.status(200).send({ message: "Corrective action updated successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteCorrectiveAction = async (req, res) => {
    try {
        await CorrectiveAction.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Corrective action deleted successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};
