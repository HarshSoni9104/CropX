const routes = require('express').Router()

const categoryController = require('../controller/CategoryController')

routes.post('/add',categoryController.addCategory)
routes.get('/category/:id',categoryController.getCategory)
routes.get('/categories',categoryController.getAllCategories)
routes.delete('/category/:id',categoryController.deleteCategory)

module.exports = routes 