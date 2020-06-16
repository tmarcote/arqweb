const Mesa = require('../models/mesa.js')
const Orden = require('../models/orden.js')

exports.create = (req, res) => {
  // Validar request
  if(!req.body.mesaId) {
    return res.status(400).send({
      message: "Parametro faltante: mesaId."
    })
  }

  if(!req.body.descripcion) {
    return res.status(400).send({
      message: "Parametro faltante: descripcion."
    })
  }

  // Verifico si mesaId existe
  Mesa.find({mesaId: req.body.mesaId})
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
      // si mesaId ya existe, devolver error
      res.status(409).send({
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
  if(!req.params.mesaId) {
    return res.status(400).send({
      message: "Parametro faltante: mesaId."
    })
  }

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

  if(!req.params.mesaId) {
    return res.status(400).send({
      message: "Parametro faltante: mesaId."
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
  if(!req.params.mesaId) {
    return res.status(400).send({
      message: "Parametro faltante: mesaId."
    })
  }

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
  // Obtener Ordenes abiertas para una determinada mesa
  if(!req.params.mesaId) {
    return res.status(400).send({
      message: "Parametro faltante: mesaId."
    })
  }

  Mesa.findOne({mesaId: req.params.mesaId})
  .then(mesa => {
    if(!mesa) {
      return res.status(404).send({
        message: "No se encontro Mesa con mesaId " + req.params.mesaId
      })
    }

    // si la mesa existe, busco las Ordenes
    let query = {
      mesaId: req.params.mesaId,
      estado: 'abierta'
    }
    Orden.find(query)
    .then(ordenes => {
      // devuelvo las ordenes abiertas
      res.send(ordenes)
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al obtener Ordenes abiertas con mesaId " + req.params.mesaId
      })
    })
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "No se encontro Mesa con mesaId " + req.params.mesaId
      })
    }
    return res.status(500).send({
      message: "Ocurrió un error al obtener Ordenes abiertas con mesaId " + req.params.mesaId
    })
  })
}

exports.cerrarOrdenes = (req, res) => {
  // Cerrar ordenes para una determinada mesa, actualizar estados y devolver monto total
  if(!req.params.mesaId) {
    return res.status(400).send({
      message: "Parametro faltante: mesaId."
    })
  }

  Mesa.findOne({mesaId: req.params.mesaId})
  .then(mesa => {
    if(!mesa) {
      return res.status(404).send({
        message: "No se encontro Mesa con mesaId " + req.params.mesaId
      })
    }

    // si la mesa existe, actualizo estados de las ordenes a cerrada
    let query = {
      mesaId: req.params.mesaId,
      estado: 'abierta'
    }

    // obtengo las ordenes para calcular el total
    Orden.find(query)
    .then(ordenes => {
      let montoTotal = ordenes
      .map(orden => { return parseFloat(orden.precio) })
      .reduce((total, monto) => {
        return total + monto
      })
      montoTotal = montoTotal.toFixed(2)

      // actualizo las ordenes a cerradas
      Orden.updateMany(query, { estado: 'cerrada' })
      .then(() => {
        // devuelvo las ordenes actualizadas y el total
        res.send({ ordenes: ordenes, total: montoTotal })
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Ocurrió un error al cerrar mesa con mesaId " + req.params.mesaId
        })
      })

    }).catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al obtener Ordenes abiertas con mesaId " + req.params.mesaId
      })
    })
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "No se encontro Mesa con mesaId " + req.params.mesaId
      })
    }
    return res.status(500).send({
      message: "Ocurrió un error al cerrar mesa con mesaId " + req.params.mesaId
    })
  })
}
