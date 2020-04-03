const Orden = require('../models/orden.js')
const Mesa = require('../models/mesa.js')

exports.create = (req, res) => {
  // Validar request
  if(!req.body.descripcion || !req.body.precio || !req.body.mesaId) {
    return res.status(400).send({
      message: "Faltan parametros."
    })
  }

  // Verifico que exista una mesa con mesaId
  Mesa.findOne({mesaId: req.params.mesaId})
  .then(mesa => {
    if (!mesa) {
      return res.status(404).send({
        message: "No se encontro Mesa con mesaId " + req.params.mesaId
      })
    } else {
      // Crear nueva Orden
      const orden = new Orden({
        mesa: req.body.mesaId,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        estado: 'abierta'
      })

      // Guardar orden en la DB
      orden.save()
      .then(data => {
        res.send(data)
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Ocurrió un error al crear una Orden."
        })
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Ocurrió un error al crear una Orden."
    })
  })
}

exports.findAll = (req, res) => {
  // Obtener Ordenes
  let query = {}

  // if (req.query.title) {
  //   query.title = req.query.title
  // }

  Orden.find(query)
  .then(ordenes => {
    res.send(ordenes)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Ocurrió un error al obtener Ordenes."
    })
  })
}

exports.findOne = (req, res) => {
  // Obtener una Orden
  Orden.findOne({mesaId: req.params.ordenId})
  .then(orden => {
    if(!orden) {
      return res.status(404).send({
        message: "No se encontro Orden con ordenId " + req.params.ordenId
      })
    }
    res.send(orden)
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "No se encontro Orden con ordenId " + req.params.ordenId
      })
    }
    return res.status(500).send({
      message: "Error al obtener Orden con ordenId " + req.params.ordenId
    })
  })
}

exports.update = (req, res) => {
  // Obtener y Actualizar Orden
  let updateOrden = function (req, res, update) {
    Orden.findByIdAndUpdate(req.params.ordenId, update, {new: true})
    .then(orden => {
      if(!orden) {
        return res.status(404).send({
          message: "No se encontro Orden con ordenId " + req.params.ordenId
        })
      }
      res.send(orden)
    }).catch(err => {
      if(err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "No se encontro Orden con ordenId " + req.params.ordenId
        })
      }
      return res.status(500).send({
        message: "Error al actualizar Orden con ordenId " + req.params.ordenId
      })
    })
  }

  // construyo el objeto update solo con los valores permitidos
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
    // Verifico que mesaId exista
    Mesa.findOne({mesaId: req.params.mesaId})
    .then(mesa => {
      if (!mesa) {
        return res.status(404).send({
          message: "No se encontro Mesa con mesaId " + req.params.mesaId
        })
      } else {
        updateOrden(req, res, update)
      }
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al actualizar Orden con ordenId " + req.params.ordenId
      })
    })
  } else {
    updateOrden(req, res, update)
  }
}

exports.delete = (req, res) => {
  // Obtener y Eliminar Orden
  Orden.findByIdAndRemove(req.params.ordenId)
  .then(orden => {
    if(!orden) {
      return res.status(404).send({
        message: "No se encontro Orden con ordenId " + req.params.ordenId
      })
    }
    res.send({message: "Orden eliminada con exito!"})
  }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "No se encontro Orden con ordenId " + req.params.ordenId
      })
    }
    return res.status(500).send({
      message: "Ocurrió un error al eliminar Orden con ordenId " + req.params.ordenId
    })
  })
}
