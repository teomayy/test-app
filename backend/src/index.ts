import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())

let jsonData = [
	{ email: 'jim@gmail.com', number: '221122' },
	{ email: 'jam@gmail.com', number: '830347' },
	{ email: 'john@gmail.com', number: '221122' },
	{ email: 'jams@gmail.com', number: '349425' },
	{ email: 'jams@gmail.com', number: '141424' },
	{ email: 'jill@gmail.com', number: '822287' },
	{ email: 'jill@gmail.com', number: '822286' },
]

app.post('/search', async (req, res) => {
	const { email, number } = req.body

	console.log('email', email, number)

	const results = jsonData.filter(
		item => item.email === email && (number ? item.number === number : true)
	)

	if (results.length > 0) {
		res.json(results)
	} else {
		res.status(404).json({ message: 'Совпадений не найдено' })
	}

	await new Promise(resolve => setTimeout(resolve, 5000))
})

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})
