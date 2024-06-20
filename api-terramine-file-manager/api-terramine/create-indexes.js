const mongoose = require('mongoose');

const uri = "mongodb+srv://mongodb:mongodb@cluster0.0n8u2uc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado a MongoDB Atlas'); //{"_id":{"$oid":"66749cc3803c846833d0a31b"},"name":"Admin"}
        
        // Definición de los esquemas y creación de índices
        createSchemasAndIndexes();
    })
    .catch(err => console.error('Error al conectar a MongoDB Atlas', err));

// Función para definir esquemas y crear índices
function createSchemasAndIndexes() {
    const roleSchema = new mongoose.Schema({
        name: { type: String, required: true }
    });

    const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true }
    });
    userSchema.index({ email: 1 }, { unique: true });

    const branchSchema = new mongoose.Schema({
        name: { type: String, required: true },
        location: { type: String, required: true }
    });

    const departmentSchema = new mongoose.Schema({
        name: { type: String, required: true },
        branch_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch', required: true }
    });

    const documentSchema = new mongoose.Schema({
        title: { type: String, required: true },
        content: { type: String, required: true },
        employee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        status: { type: String, enum: ['Pending', 'Reviewed'], required: true },
        manager_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        review_comments: { type: String },
        created_at: { type: Date, default: Date.now }
    });

    const taskSchema = new mongoose.Schema({
        title: { type: String, required: true },
        description: { type: String, required: true },
        status: { type: String, enum: ['Pending', 'Completed'], required: true },
        employee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        manager_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        due_date: { type: Date, required: true },
        created_at: { type: Date, default: Date.now }
    });

    const auditSchema = new mongoose.Schema({
        auditor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        date: { type: Date, required: true },
        report_path: { type: String, required: true }
    });

    const auditFindingSchema = new mongoose.Schema({
        audit_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Audit', required: true },
        description: { type: String, required: true },
        status: { type: String, enum: ['Open', 'Closed'], required: true },
        created_at: { type: Date, default: Date.now }
    });

    // Modelos de Mongoose
    const Role = mongoose.model('Role', roleSchema);
    const User = mongoose.model('User', userSchema);
    const Branch = mongoose.model('Branch', branchSchema);
    const Department = mongoose.model('Department', departmentSchema);
    const Document = mongoose.model('Document', documentSchema);
    const Task = mongoose.model('Task', taskSchema);
    const Audit = mongoose.model('Audit', auditSchema);
    const AuditFinding = mongoose.model('AuditFinding', auditFindingSchema);

    // Asegurarse de que los índices sean creados
    User.createIndexes()
        .then(() => console.log('Índices de User creados correctamente'))
        .catch(err => console.error('Error al crear los índices de User', err));

    // Cerrar la conexión una vez creadas las colecciones e índices
    mongoose.connection.close();
}
