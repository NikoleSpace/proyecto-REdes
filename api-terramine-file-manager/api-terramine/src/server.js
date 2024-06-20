const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const documentRoutes = require('./routes/documentRoutes');
const auditRoutes = require('./routes/auditRoutes');
const auditFindingRoutes = require('./routes/auditFindingRoutes');
const correctiveActionRoutes = require('./routes/correctiveActionRoutes');
const branchRoutes = require('./routes/branchRoutes');
const roleRoutes = require('./routes/roleRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/audits', auditRoutes);
app.use('/api/audit-findings', auditFindingRoutes);
app.use('/api/corrective-actions', correctiveActionRoutes);
app.use('/api/branches', branchRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
