const mongoose = require('mongoose')

const MesasSchema = mongoose.Schema({
  mesaId: String,
  descripcion: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Mesas', MesasSchema)
