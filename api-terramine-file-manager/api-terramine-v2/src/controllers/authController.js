const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { username, password, email, role } = req.body;
    const password_hash = bcrypt.hashSync(password, 8);
    try {
        const user = new User({ username, password_hash, email, role });
        await user.save();
        res.status(201).send({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).send({ message: "User not found" });

        const passwordIsValid = bcrypt.compareSync(password, user.password_hash);
        if (!passwordIsValid) return res.status(401).send({ token: null });

        const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: 86400 });
        res.status(200).send({ token });
    } catch (error) {
        res.status(500).send(error);
    }
};
