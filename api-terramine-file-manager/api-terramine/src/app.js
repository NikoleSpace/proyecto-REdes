const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


// Middleware
app.use(bodyParser.json());

// MongoDB connection
//mongoose.connect('mongodb://51.120.0.221:27017/TerraMineDB_V1', { useNewUrlParser: true, useUnifiedTopology: true });
// MongoDB connection
mongoose.connect("mongodb+srv://mongodb:mongodb@cluster0.0n8u2uc.mongodb.net/TerraMineDB?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
    console.error('Error connecting to MongoDB Atlas', err);
});

// Routes
const documentRoutes = require('./routes/documentRoutes');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const permissionsRoutes = require('./routes/permissionRoutes');
const areaRoutes = require('./routes/areaRoutes');
const branchRoutes = require('./routes/branchRoutes');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use('/documents', documentRoutes);
app.use('/users', userRoutes);
app.use('/roles', roleRoutes);
app.use('/permissions', permissionsRoutes);
app.use('/areas', areaRoutes);
app.use('/branches',branchRoutes );
app.use('/task', taskRoutes);
app.use('/auth', authRoutes)

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

