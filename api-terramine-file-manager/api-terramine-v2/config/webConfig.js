// cors.config.js

const cors = require('cors');

const whitelist = ['http://localhost:4200']; // Aquí puedes agregar otros dominios permitidos si es necesario

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // Habilita el intercambio de cookies a través de dominios
};

module.exports = cors(corsOptions);
