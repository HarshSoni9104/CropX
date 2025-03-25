const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Decimal128 = mongoose.Types.Decimal128;

const orderSchema = new Schema({
    // orderId:{
    //     type:String,
    //     required:true,
    //     unique:true 
    // },
    buyerId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    farmerId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    totalAmount:{
        type: Decimal128,
        required: true
    },
    status:{
        type:String,
        enum:['Pending' , 'Confirmed' , 'Shipped' ,'Delivered','Cancelled'],
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model("orders" , orderSchema)

