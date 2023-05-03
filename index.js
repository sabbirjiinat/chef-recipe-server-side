const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 5330;
const chefCategory = require('./data/category.json')
const recipes = require('./data/recipes.json')
const restaurants = require('./data/restaurants.json')
const traditionalFood = require('./data/traditionalFood.json')


app.get('/', (req, res) => {
  res.send('react firebase chef server site is running')
})


app.get('/chef', (req, res) => {
  res.send(chefCategory)
})

app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  const findChefById = chefCategory.find(chef => chef.id == id)
  res.send(findChefById)
})

app.get('/recipe/:id', (req, res) => {
  const id = req.params.id;
  const filterRecipeById = recipes.filter(recipe => recipe.category_id == id)
  res.send(filterRecipeById)
})

app.get('/restaurants', (req, res) => {
  res.send(restaurants)
})

app.get('/traditionalFood', (req, res) => {
  res.send(traditionalFood)
})

app.listen(port, () => {
  console.log(`react firebase chef server site is running at ${port}`)
})