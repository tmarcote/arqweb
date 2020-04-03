const Orden = require('../models/orden.js')
const Mesa = require('../models/mesa.js')

exports.create = (req, res) => {
  // Validate request
  if(!req.body.descripcion || !req.body.precio || !req.body.mesaId) {
    return res.status(400).send({
      message: "Missing params."
    })
  }

  // Check if idMesa exists
  Mesa.findOne({mesaId: req.params.mesaId})
  .then(mesa => {
    if (!mesa) {
      return res.status(404).send({
        message: "Mesa not found with id " + req.params.mesaId
      })
    } else {
      // Create new Orden
      const orden = new Orden({
        mesa: req.body.mesaId,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        estado: 'abierta'
      })

      // Save Orden in the database
      orden.save()
      .then(data => {
        res.send(data)
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating Orden."
        })
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating Orden."
    })
  })
}

exports.findAll = (req, res) => {
  let query = {}

  // if (req.query.title) {
  //   query.title = req.query.title
  // }

  Orden.find(query)
  .then(ordenes => {
    res.send(ordenes)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving ordenes."
    })
  })
}

exports.findOne = (req, res) => {
  Orden.findOne({mesaId: req.params.ordenId})
  .then(orden => {
    if(!orden) {
      return res.status(404).send({
        message: "Orden not found with id " + req.params.ordenId
      })
    }
    res.send(orden)
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Orden not found with id " + req.params.ordenId
      })
    }
    return res.status(500).send({
      message: "Error retrieving orden with id " + req.params.ordenId
    })
  })
}

exports.update = (req, res) => {
  let updateOrden = function (req, res, update) {
    // Find orden and update it with the request body
    Orden.findByIdAndUpdate(req.params.ordenId, update, {new: true})
    .then(orden => {
      if(!orden) {
        return res.status(404).send({
          message: "Orden not found with id " + req.params.ordenId
        })
      }
      res.send(orden)
    }).catch(err => {
      if(err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Orden not found with id " + req.params.ordenId
        })
      }
      return res.status(500).send({
        message: "Error updating orden with id " + req.params.ordenId
      })
    })
  }

  //build update object
  let update = {}

  if (req.body.descripcion) {
    update.descripcion = req.body.descripcion
  }
  if (req.body.mesaId) {
    update.mesaId = req.body.mesaId
  }
  if (req.body.precio) {
    update.descripcion = req.body.precio
  }
  if (req.body.estado) {
    update.descripcion = req.body.estado
  }

  if (update.mesaId !== undefined) {
    // Check if idMesa exists
    Mesa.findOne({mesaId: req.params.mesaId})
    .then(mesa => {
      if (!mesa) {
        return res.status(404).send({
          message: "Mesa not found with id " + req.params.mesaId
        })
      } else {
        updateOrden(req, res, update)
      }
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating Orden."
      })
    })
  } else {
    updateOrden(req, res, update)
  }
}

exports.delete = (req, res) => {
  Orden.findByIdAndRemove(req.params.ordenId)
  .then(orden => {
    if(!orden) {
      return res.status(404).send({
        message: "Orden not found with id " + req.params.ordenId
      })
    }
    res.send({message: "Orden deleted successfully!"})
  }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Orden not found with id " + req.params.ordenId
      })
    }
    return res.status(500).send({
      message: "Could not delete orden with id " + req.params.ordenId
    })
  })
}
