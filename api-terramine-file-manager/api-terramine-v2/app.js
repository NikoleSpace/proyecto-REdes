// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./config/db')
const cors = require('./config/webConfig')
const configureHelmet = require('./config/helmet.config');
const app = express();

// Middlewares
app.use(bodyParser.json());

app.use(cors);

configureHelmet(app);

mongodb();

// Rutas
const authRoutes = require('./routes/authRoutes');
const usersRoutes = require('./routes/userRoutes');

// Rutas sin autenticación
app.use('/api/auth', authRoutes);

// Rutas protegidas (requieren token JWT)
app.use('/api',usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
