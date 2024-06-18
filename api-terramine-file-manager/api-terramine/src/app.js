const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://51.120.0.221:27017/TerraMineDB_V1', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
const documentRoutes = require('./routes/documentRoutes');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const permissionsRoutes = require('./routes/permissionRoutes');
const areaRoutes = require('./routes/areaRoutes');
const branchRoutes = require('./routes/branchRoutes');

app.use('/documents', documentRoutes);
app.use('/users', userRoutes);
app.use('/roles', roleRoutes);
app.use('/permissions', permissionsRoutes);
app.use('/areas', areaRoutes);
app.use('/branches',branchRoutes )
// Add more route usages here

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

