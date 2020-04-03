const mongoose = require('mongoose')

const OrdenesSchema = mongoose.Schema({
  descripcion: String,
  precio: String,
  mesaId: String,
  estado: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Ordenes', OrdenesSchema)
