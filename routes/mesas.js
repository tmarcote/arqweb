const express = require('express')
const router = express.Router()
const mesasController = require('../controllers/mesas')

// Create a new Note
router.post('/', mesasController.create)

// Retrieve all Notes
router.get('/', mesasController.findAll)

// Retrieve a single Note with noteId
router.get('/:mesaId', mesasController.findOne)

// Update a Note with noteId
router.put('/:mesaId', mesasController.update)

// Delete a Note with noteId
router.delete('/:mesaId', mesasController.delete)

module.exports = router
