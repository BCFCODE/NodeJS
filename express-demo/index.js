require('dotenv').config()
const PORT = process.env.PORT
const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3])
})

app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.query)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))