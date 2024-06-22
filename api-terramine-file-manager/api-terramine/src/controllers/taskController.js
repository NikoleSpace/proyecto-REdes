const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
    const { title, description, status, employee_id, manager_id, due_date } = req.body;
    try {
        const task = new Task({ title, description, status, employee_id, manager_id, due_date });
        await task.save();
        res.status(201).send({ message: "Task created successfully", task_id: task._id });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateTask = async (req, res) => {
    const { title, description, status, due_date } = req.body;
    try {
        await Task.findByIdAndUpdate(req.params.id, { title, description, status, due_date });
        res.status(200).send({ message: "Task updated successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};
