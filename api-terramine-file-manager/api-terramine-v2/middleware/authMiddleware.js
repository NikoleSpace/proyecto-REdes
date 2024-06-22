// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function authMiddleware(req, res, next) {
    // Leer el token del header de autorización
    const token = req.header('Authorization');

    // Verificar si no hay token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // Verificar el token
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);

        // Añadir el usuario desde el token decodificado
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

module.exports = authMiddleware;
