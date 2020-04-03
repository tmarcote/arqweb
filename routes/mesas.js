const express = require('express')
const router = express.Router()
const mesasController = require('../controllers/mesas')

// Crear una nueva Mesa
router.post('/', mesasController.create)

// Obtener Mesas
router.get('/', mesasController.findAll)

// Obtener una Mesa por mesaId
router.get('/:mesaId', mesasController.findOne)

// Actualizar una Mesa por mesaId
router.put('/:mesaId', mesasController.update)

// Eliminar una Mesa por mesaId
router.delete('/:mesaId', mesasController.delete)

// Obtener ordenes abiertas para una mesa
router.get('/:mesaId/ordenes-abiertas', mesasController.findOrdenes)

// Cerrar una mesa y obtener ordenes
router.post('/:mesaId/ordenes-abiertas', mesasController.cerrarOrdenes)

module.exports = router
