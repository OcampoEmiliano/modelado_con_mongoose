const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

export const Employee = mongoose.model('Empleado', employeeSchema);