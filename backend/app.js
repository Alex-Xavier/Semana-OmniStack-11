const express = require ('express')

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
	return response.json({
		start: 'Hello World!!',
		evento: 'Semana OmniStack 11.0',
		aluno: 'Alex Xavier'
	})
})

app.listen(3333)