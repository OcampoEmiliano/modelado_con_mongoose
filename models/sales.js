const salesSchema = new Schema({
  empleado_id: {
    type: Schema.Types.ObjectId,
    ref: 'Empleado',
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now,
    required: true
  },
  monto: {
    type: Number,
    required: true
  },
  producto: {
    type: String,
    required: true
  }
});

export const Sales = mongoose.model('Venta', salesSchema);