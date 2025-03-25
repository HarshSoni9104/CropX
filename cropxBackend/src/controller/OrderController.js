const orderModel = require("../models/OrderModels");
const UserModels = require("../models/UserModels");

const getAllOrders = async(req , res) => {
    try{
        const orders = await orderModel.find().populate("buyerId farmerId");
        res.status(200).json({
            message:"Orders fetched successfully",
            data:orders
        })
    }catch(err){
        res.status(500).json({ message: "Server Error", error: err.message })
    }
}

const addOrder = async(req, res) => {
    try{
    const {buyerId , farmerId , totalAmount , status} = req.body;

    const buyer = await UserModels.findById(buyerId)
    const farmer = await UserModels.findById(farmerId)

    if(!buyer || !farmer){
        return res.status(404).json({message: "Buyer and Farmer not found"})
    }

    const newOrder = await orderModel.create({
        buyerId,
        farmerId,
        totalAmount,
        status: status || "Pending"
    });
    
    res.status(201).json({
        message:"Order Added Successfully",
        orderId:newOrder._id,
        data: newOrder
    })
    }catch(err){
        res.status(500).json({message: "Failed to add order", error: err.message})
        console.log(err);
        
    }
}

const getOrderById = async(req ,res) => {
    try{
        const getOrder = await orderModel.findById(req.params.id).populate("buyerId farmerId");
        if (!getOrder) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({
            message:"Order fetched",
            data:getOrder
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const deleteOrderById = async(req, res) => {
    try{
        const deletedOrder = await orderModel.findByIdAndDelete(req.params.id)
        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({
            message:"Order Deleted successfully",
            data:deletedOrder
        })
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports = {
    addOrder,
    getAllOrders,
    getOrderById,
    deleteOrderById
}