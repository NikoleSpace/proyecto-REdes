// models/User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    telefono: { type: String },
    cargo: { type: String },
    sucursal_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Sucursal' },
    area_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Area' },
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rol' }],
    fecha_creacion: { type: Date, default: Date.now },
    fecha_finalizacion: { type: Date },
    ultimo_acceso: { type: Date },
    estado: { type: String, enum: ['activo', 'inactivo'], default: 'activo' },
    foto: { data: Buffer, contentType: String } // Campo para almacenar la foto
});

// Antes de guardar, hashear la contraseña
UserSchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashed = await bcrypt.hash(this.password, 10);
        this.password = hashed;
        this.email = hashed;
        return next();
    } catch (error) {
        return next(error);
    }
});

// Método para comparar contraseñas
UserSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

// Método estático para buscar usuarios por correo electrónico
UserSchema.statics.findByEmail = function(email) {
    return this.findOne({ email });
};

// Método estático para actualizar la última fecha de acceso
UserSchema.statics.updateLastAccess = function(userId, date) {
    return this.findByIdAndUpdate(userId, { ultimo_acceso: date }, { new: true });
};

module.exports = mongoose.model('User', UserSchema);
