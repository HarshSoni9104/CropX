const categoryModel = require('../models/CategoryModels')

const addCategory = async(req , res) => {
   try{
        const savedCategory = await categoryModel.create(req.body)
        res.status(201).json({
            message:"Category Added",
            data: savedCategory
        })

   }catch(err){
        res.status(500).json({message: err.message})
   }
}

const getAllCategories = async(req, res) => {
    try{    
        const getAllCategoryData = await categoryModel.find()
        res.status(200).json({
            message:"All Categories fetched successfully",
            data:getAllCategoryData
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const getCategory = async(req, res) => {
    try{
        const getCategoryData = await categoryModel.findById(req.params.id)
        res.status(200).json({
            message:" Category fetched successfully",
            data:getCategoryData
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const deleteCategory = async (req , res) => {
    try{
        const deleteCategoryData = await categoryModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"Category Deleted successfully",
            data:deleteCategoryData
        })
    }catch(err){
        res.status(500).json({message: err.message})

    }
}

module.exports = {
    addCategory,
    getAllCategories,
    getCategory,
    deleteCategory
}