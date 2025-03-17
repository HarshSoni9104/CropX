const routes = require('express').Router()

const SubcategoryController = require('../controller/SubcategoryController')

routes.post('/add',SubcategoryController.addSubcategory)
routes.get('/subcategory/:id',SubcategoryController.getSubcategory)
routes.get('/subcategories',SubcategoryController.getAllSubcategories)
routes.delete('/subcategory/:id',SubcategoryController.deleteSubcategory)
routes.get('/getsubcategorybycategory/:categoryId' , SubcategoryController.getSubcategoryByCategoryId)


module.exports = routes 