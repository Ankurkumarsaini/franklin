const express = require('express')
const http = require('http')
const https = require('https')
var Port = process.env.PORT || 8100;
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.status(200).send('Server is working.');
});
