const express = require('express')
const router = express.Router()
const mesasController = require('../controllers/mesas')

// Create a new Mesa
router.post('/', mesasController.create)

// Retrieve all Mesas
router.get('/', mesasController.findAll)

// Retrieve a single Mesa with mesaId
router.get('/:mesaId', mesasController.findOne)

// Update a Mesa with mesaId
router.put('/:mesaId', mesasController.update)

// Delete a Mesa with mesaId
router.delete('/:mesaId', mesasController.delete)

// Retrieve ordenes abiertas para una mesa
router.get('/:mesaId/ordenes', mesasController.findOrdenes)

// Cerrar una mesa y obtener ordenes y total
router.post('/:mesaId/ordenes', mesasController.cerrarOrdenes)

module.exports = router
