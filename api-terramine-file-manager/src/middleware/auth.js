const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const data = jwt.verify(token, process.env.JWT_SECRET); // Reemplaza 'process.env.JWT_SECRET' con tu clave secreta definida en las variables de entorno

    const user = await User.findOne({ _id: data._id, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Por favor, autentícate.' });
  }
};

module.exports = auth;
