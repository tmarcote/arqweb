const Mesa = require('../models/mesa.js')

exports.create = (req, res) => {
  // Validar request
  if(!req.body.mesaId) {
    return res.status(400).send({
      message: "Parametro faltante: mesaId."
    })
  }

  // Verifico si mesaId existe
  Mesa.find({idMesa: req.body.mesaId})
  .then(mesas => {
    if (mesas.length === 0) {
      // Crear nueva Mesa
      const mesa = new Mesa({
        mesaId: req.body.mesaId,
        descripcion: req.body.descripcion
      })

      // Guardar Mesa en la DB
      mesa.save()
      .then(data => {
        res.send(data)
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Ocurrió un error al crear una Mesa."
        })
      })
    } else {
      // si idMesa ya existe, devolver error
      res.status(403).send({
        message: "mesaId: " +  + " ya en uso."
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Ocurrió un error al crear una Mesa."
    })
  })
}

exports.findAll = (req, res) => {
  // Obtener Mesas
  let query = {}

  // if (req.query.title) {
  //   query.title = req.query.title
  // }

  // Obtener Mesas
  Mesa.find(query)
  .then(mesas => {
    res.send(mesas)
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Ocurrió un error al obtener Mesas."
    })
  })
}

exports.findOne = (req, res) => {
  // Obtener una Mesa
  Mesa.findOne({mesaId: req.params.mesaId})
  .then(mesa => {
    if(!mesa) {
      return res.status(404).send({
        message: "No se encontro Mesa con mesaId " + req.params.mesaId
      })
    }
    res.send(mesa)
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "No se encontro Mesa con mesaId " + req.params.mesaId
      })
    }
    return res.status(500).send({
      message: "Error al obtener Mesa con mesaId " + req.params.mesaId
    })
  })
}

exports.update = (req, res) => {
  // Validar Request
  if(!req.body.descripcion) {
    return res.status(400).send({
      message: "Parametro faltante: descripcion."
    })
  }

  // Obtener y Actualizar Mesa
  Mesa.findOneAndUpdate({mesaId: req.params.mesaId}, {
    descripcion: req.body.descripcion
  }, {new: true})
  .then(mesa => {
    if(!mesa) {
      return res.status(404).send({
        message: "No se encontro Mesa con mesaId " + req.params.mesaId
      })
    }
    res.send(mesa)
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "No se encontro Mesa con mesaId " + req.params.mesaId
      })
    }
    return res.status(500).send({
      message: "Ocurrió un error al actualizar Mesa con mesaId " + req.params.mesaId
    })
  })
}

exports.delete = (req, res) => {
  // Obtener y Eliminar Mesa
  Mesa.findOneAndRemove({mesaId: req.params.mesaId})
  .then(mesa => {
    if(!mesa) {
      return res.status(404).send({
        message: "No se encontro Mesa con mesaId " + req.params.mesaId
      })
    }
    res.send({message: "Mesa eliminada con exito!"})
  }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "No se encontro Mesa con mesaId " + req.params.mesaId
      })
    }
    return res.status(500).send({
      message: "Ocurrió un error al eliminar Mesa con mesaId " + req.params.mesaId
    })
  })
}

exports.findOrdenes = (req, res) => {

}

exports.cerrarOrdenes = (req, res) => {

}
