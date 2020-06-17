const express = require('express')
const router = express.Router()
const Mesa = require('../models/mesa.js')

// mesas index view
router.get('/', (req, res) => {
  Mesa.find({})
  .then(mesas => {
    res.render('mesas/index', { mesas: mesas })
  }).catch( err => {
    res.json({"message": "Error al obtener mesas."})
  })
})

module.exports = router
