const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    name:{
        type:String,
        enum: ['Farmer', 'Buyer', 'Wholesaler', 'Retailer', 'Logistics', 'Admin'],
        required: true
    },
    description:{
        type:String
    }
}, { timestamps: true })

module.exports = mongoose.model("roles" , roleSchema)       