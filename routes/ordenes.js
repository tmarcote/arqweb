const express = require('express')
const router = express.Router()
const ordenesController = require('../controllers/ordenes')

// Create a new Orden
router.post('/', ordenesController.create)

// Retrieve all Ordenes
router.get('/', ordenesController.findAll)

// Retrieve a single Orden with ordenId
router.get('/:ordenId', ordenesController.findOne)

// Update a Orden with ordenId
router.put('/:ordenId', ordenesController.update)

// Delete a Orden with ordenId
router.delete('/:ordenId', ordenesController.delete)

module.exports = router
