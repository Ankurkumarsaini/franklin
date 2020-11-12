const express = require('express')
// will use this later to send requests
const http = require('http')
const https = require('https')
// import env variables


const app = express()
const port = process.env.PORT || 8200

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.status(200).send('Server is working.')
})

app.listen(port, () => {
	console.log(`🌏 Server is running at http://localhost:${port}`)
})
