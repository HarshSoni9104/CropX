const subcategoryModel = require('../models/SubcategoryModels')

const addSubcategory = async(req , res) => {
   try{
        const savedSubcategory = await subcategoryModel.create(req.body)
        res.status(201).json({
            message:"Subcategory Added",
            data: savedSubcategory
        })

   }catch(err){
        res.status(500).json({message: err.message})
   }
}

const getAllSubcategories = async(req, res) => {
    try{
        const getAllSubcategoryData = await subcategoryModel.find().populate('categoryId')
        res.status(200).json({
            message:"All Subcategories fetched successfully",
            data:getAllSubcategoryData
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const getSubcategory = async(req, res) => {
    try{
        const getSubcategoryData = await subcategoryModel.findById(req.params.id)
        res.status(200).json({
            message:" Subcategory fetched successfully",
            data:getSubcategoryData
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const deleteSubcategory = async (req , res) => {
    try{
        const deleteSubcategoryData = await subcategoryModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"deleteSubcategoryData Deleted successfully",
            data:deleteSubcategoryData
        })
    }catch(err){
        res.status(500).json({message: err.message})

    }
}

const getSubcategoryByCategoryId = async (req, res ) => {
    try{
        const subcategories =await subcategoryModel.find({categoryId : req.params.categoryId})
        res.status(200).json({
            message: "Subcategories found",
            data: subcategories,
          });   
    }catch(err){
        res.status(500).json({message: err.message})
    }
}
module.exports = {
        addSubcategory,
        getAllSubcategories,
        getSubcategory,
        deleteSubcategory,
        getSubcategoryByCategoryId
}