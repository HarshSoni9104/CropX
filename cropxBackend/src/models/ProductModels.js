const mongoose = require("mongoose")

const Schema = mongoose.Schema

const productSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    price_per_unit:{
        type:Number,
        required: true
    },
    unit:{
        type:String,
        enum:["kg" , "liters" , "dozen" , "pieces"],
        required:true
    },
    quantity_available:{
        type:Number,
        required: true
    },  
    farmerId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "categories", // Refers to "categories" collection
        required: true
    },
    subcategoryId: {
        type: Schema.Types.ObjectId,
        ref: "subcategories", // Refers to "subcategories" collection
        required: true
    },
    productUrl:{
        type: String,
        required: true
    },
    },  
    { timestamps:true})
    
module.exports = mongoose.model("product" , productSchema)