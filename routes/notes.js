const express = require('express')
const router = express.Router()
const noteController = require('../controllers/note')

// Create a new Note
router.post('/', noteController.create)

// Retrieve all Notes
router.get('/', noteController.findAll)

// Retrieve a single Note with noteId
router.get('/:noteId', noteController.findOne)

// Update a Note with noteId
router.put('/:noteId', noteController.update)

// Delete a Note with noteId
router.delete('/:noteId', noteController.delete)

module.exports = router
