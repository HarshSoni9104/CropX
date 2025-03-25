const routes = require('express').Router()
const orderController  = require("../controller/OrderController")

routes.post('/add' , orderController.addOrder)
routes.get('/order/:id' , orderController.getOrderById)
routes.get('/orders' , orderController.getAllOrders)
routes.delete('/order/:id' , orderController.deleteOrderById)

module.exports = routes