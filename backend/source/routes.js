const express = require('express')

const routes = express.Router()

routes.get('/', (request, response) => {
	return response.json({
		start: 'Hello World!!',
		evento: 'Semana OmniStack 11.0',
		aluno: 'Alex Xavier'
	})
})

module.exports = routes