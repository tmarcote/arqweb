const express = require('express')
const router = express.Router()
const ordenesController = require('../controllers/ordenes')

// Crear una nueva Orden
router.post('/', ordenesController.create)

// Obtener Ordenes
router.get('/', ordenesController.findAll)

// Obtener una Orden por ordenId
router.get('/:ordenId', ordenesController.findOne)

// Actualizar una Orden por ordenId
router.put('/:ordenId', ordenesController.update)

// Eliminar una Orden por ordenId
router.delete('/:ordenId', ordenesController.delete)

module.exports = router
