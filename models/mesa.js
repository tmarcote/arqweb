const mongoose = require('mongoose')

const MesaSchema = mongoose.Schema({
  mesaId: String,
  descripcion: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Mesa', MesaSchema)
