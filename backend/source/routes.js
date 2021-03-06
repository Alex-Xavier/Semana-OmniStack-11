const express = require('express')

const SessionController = require('./controllers/SessionController')
const ProfileController = require('./controllers/ProfileController')
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/profile', ProfileController.index)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)
//routes.delete('/ongs/:id', OngController.delete)

routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes