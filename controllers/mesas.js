const Mesa = require('../models/mesa.js')

exports.create = (req, res) => {
  // Validate request
  if(!req.body.mesaId) {
    return res.status(400).send({
      message: "mesaId can not be empty"
    })
  }

  // Check if idMesa exists
  Mesa.find({idMesa: req.body.mesaId})
  .then(mesas => {
    if (mesas.length === 0) {
      // Create new Mesa
      const mesa = new Mesa({
        mesaId: req.body.mesaId,
        descripcion: req.body.descripcion
      })

      // Save Mesa in the database
      mesa.save()
      .then(data => {
        res.send(data)
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Note."
        })
      })
    } else {
      // idMesa already exists return error
      res.status(403).send({
        message: "mesaId: " +  + " already in use."
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving mesas."
    })
  })
}

exports.findAll = (req, res) => {
  let query = {}

  // if (req.query.title) {
  //   query.title = req.query.title
  // }

  Mesa.find(query)
  .then(mesas => {
    res.send(mesas)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving mesas."
    })
  })
}

exports.findOne = (req, res) => {
  Mesa.findOne({mesaId: req.params.mesaId})
  .then(mesa => {
    if(!mesa) {
      return res.status(404).send({
        message: "Mesa not found with id " + req.params.mesaId
      })
    }
    res.send(mesa)
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Mesa not found with id " + req.params.mesaId
      })
    }
    return res.status(500).send({
      message: "Error retrieving mesa with id " + req.params.mesaId
    })
  })
}

exports.update = (req, res) => {
  // Validate Request
  if(!req.body.descripcion) {
    return res.status(400).send({
      message: "Param descripcion can not be empty"
    })
  }

  // Find note and update it with the request body
  Mesa.findOneAndUpdate({mesaId: req.params.mesaId}, {
    descripcion: req.body.descripcion
  }, {new: true})
  .then(mesa => {
    if(!mesa) {
      return res.status(404).send({
        message: "Mesa not found with id " + req.params.mesaId
      })
    }
    res.send(mesa)
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Mesa not found with id " + req.params.mesaId
      })
    }
    return res.status(500).send({
      message: "Error updating mesa with id " + req.params.mesaId
    })
  })
}

exports.delete = (req, res) => {
  Mesa.findOneAndRemove({mesaId: req.params.mesaId})
  .then(mesa => {
    if(!mesa) {
      return res.status(404).send({
        message: "Mesa not found with id " + req.params.mesaId
      })
    }
    res.send({message: "Mesa deleted successfully!"})
  }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Mesa not found with id " + req.params.mesaId
      })
    }
    return res.status(500).send({
      message: "Could not delete mesa with id " + req.params.mesaId
    })
  })
}
