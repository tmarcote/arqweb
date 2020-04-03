const express = require('express')
const bodyParser = require('body-parser')
const dbConfig = require('./config/db')
const mongoose = require('mongoose')
const mesasRoutes = require('./routes/mesas')
const ordenesRoutes = require('./routes/ordenes')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// conecto el mongoose a la db
mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database")
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err)
  process.exit()
})

app.get('/', (req, res) => {
  res.json({"message": "Welcome"})
})

app.use('/mesas', mesasRoutes)
app.use('/ordenes', ordenesRoutes)

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})
