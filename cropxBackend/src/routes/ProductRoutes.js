const routes = require('express').Router()
const productController = require('../controller/ProductController')
routes.post('/add',productController.addProduct)
routes.get('/product/:id',productController.getProductById)
routes.get('/products',productController.getAllProduct)
routes.delete('/delete/:id',productController.deleteProduct)
routes.post('/addwithfile', productController.addProductWithFile)
module.exports = routes 