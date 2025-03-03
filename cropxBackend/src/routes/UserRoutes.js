const routes = require("express").Router()
const userController = require('../controller/UserController')
routes.get("/users",userController.getAllUser)
// routes.post("/user" , userController.addUser)
routes.post("/user" , userController.signUp)
routes.delete("/user/:id",userController.deleteUser)
routes.get("/user/:id" , userController.findUser)
routes.post("/user/login" , userController.loginUser)
module.exports = routes 