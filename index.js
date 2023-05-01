const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 5000;
const chefCategory = require('./data/category.json')


app.get('/', (req, res) => {
  res.send('react firebase chef server site is running')
})


app.get('/chef', (req, res) => {
    res.send(chefCategory)
})


app.listen(port, () => {
  console.log(`react firebase chef server site is running at ${port}`)
})