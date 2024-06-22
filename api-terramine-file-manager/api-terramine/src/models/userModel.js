const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String , required: true},
  phone: { type: String, required: true },
  position: { type: String, required: true },
  area_id: { type: Schema.Types.ObjectId, ref: 'Area' },
  branch_id : { type: Schema.Types.ObjectId, ref: 'Branch' },
  role_id: { type: Schema.Types.ObjectId, ref: 'Role' },
  creation_date: { type: Date, required: true, default: Date.now },
  credential_expiry_date: { type: Date, required: true },
  active: { type: Boolean, default: true } 
});
userSchema.post('save', async function (doc, next) {
  try {
      const Area = mongoose.model('Area');
      const area = await Area.findById(doc.area_id);
      if (area) {
          area.employees.push(doc._id);
          await area.save();
      }
      next();
  } catch (error) {
      next(error);
  }
});
module.exports = mongoose.model('User', userSchema);
