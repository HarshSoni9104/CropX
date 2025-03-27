const productModel = require('../models/ProductModels');
const userModel = require("../models/UserModels");
const multer = require("multer");
const path = require("path");
const cloudinaryUtil = require("../utils/CloudinaryUtils");
//storage engine

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

//multer object....

const upload = multer({
  storage: storage,
  //fileFilter:
}).single("image");

const addProduct = async (req, res) => {
    try {
        console.log("Request received:", req.body);

        const { name, description, price_per_unit, quantity_available, categoryId, subcategoryId, farmerId , unit } = req.body;

        // ✅ Check if all required fields are present
        if (!name || !description || !price_per_unit || !quantity_available || !categoryId || !subcategoryId || !farmerId || !unit) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // ✅ Validate Farmer Exists
        const farmer = await userModel.findOne({ _id: farmerId }).populate("roleId");
        console.log("Farmer found:", farmer);

        if (!farmer) {
            return res.status(403).json({ message: "Only Farmers can add products" });
        }

        // ✅ Create Product    
        const savedProduct = await productModel.create({
            name,
            description,
            price_per_unit,
            quantity_available,
            farmerId,
            categoryId,
            subcategoryId,
            unit

        });

        res.status(201).json({
            message: "Product added successfully",
            data: savedProduct
        });

    } catch (err) {
        console.error("Error adding product:", err);  // Added detailed error logging
        res.status(500).json({ message: err.message });
    }
};

const getAllProduct = async (req, res) => {
    try {
        console.log("Fetching all products...");
        const allProducts = await productModel.find().populate("farmerId categoryId subcategoryId");
        res.status(200).json({
            message: "All Products",
            data: allProducts
        });
    } catch (err) {
        console.error("Error fetching products:", err);
        res.status(500).json({ message: err.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        console.log("Deleting product with ID:", req.params.id);
        const deletedData = await productModel.findByIdAndDelete(req.params.id);
        
        if (!deletedData) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            message: "Product deleted successfully",
            data: deletedData
        });
    } catch (err) {
        console.error("Error deleting product:", err);
        res.status(500).json({ message: err.message });
    }
};

const getProductById = async (req, res) => {
    try {
        console.log("Fetching product with ID:", req.params.id);
        const getproduct = await productModel.findById(req.params.id).populate("farmerId categoryId subcategoryId");

        if (!getproduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            message: "Product fetched successfully",
            data: getproduct
        });
    } catch (err) {
        console.error("Error fetching product:", err);
        res.status(500).json({ message: err.message });
    }
};

const addProductWithFile = async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        console.error("Multer Error:", err);
        return res.status(500).json({ message: err.message });
      }
  
      console.log("Received File:", req.file);
      console.log("Received Body:", req.body);
  
      if (!req.file) {
        return res.status(400).json({ message: "Image is required" });
      }
  
      try {
        // Upload to Cloudinary
        const cloudinaryResponse = await cloudinaryUtil.uploadFileToCloudinary(req.file);
        console.log("Cloudinary Response:", cloudinaryResponse);
  
        // Check if all required fields exist
        const { name, description, price_per_unit, quantity_available, categoryId, subcategoryId, farmerId, unit } = req.body;
        if (!name || !description || !price_per_unit || !quantity_available || !categoryId || !subcategoryId || !farmerId || !unit) {
          return res.status(400).json({ message: "All fields are required" });
        }
  
        // Save product in DB
        const savedProduct = await productModel.create({
          name,
          description,
          price_per_unit,
          quantity_available,
          farmerId,
          categoryId,
          subcategoryId,
          unit,
          productUrl: cloudinaryResponse.secure_url,
        });
  
        res.status(201).json({ message: "Product saved successfully", data: savedProduct });
  
      } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({ message: error.message });
      }
    });
  };
  
const updateProduct = async(req, res) => {
    try{
        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.status(200).json({
            message:"Product updated succcessfully",
            data:updatedProduct 
        })
    }catch(err){
        res.status(500).json({
            message:"error while updating product",
            err: err
        })
    }
}

const getAllProductsByUserId = async (req, res) => {
    try {
        const { userId } = req.params; // Extract userId from URL parameter
        console.log("Fetching products for userId:", userId);

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const products = await productModel
            .find({ farmerId: userId }) // Ensure `farmerId` is used instead of `userId`
            .populate("categoryId subcategoryId farmerId");

        if (products.length === 0) {
            return res.status(404).json({ message: "No Products Found" });
        }

        res.status(200).json({
            message: "Products found successfully",
            data: products
        });

    } catch (err) {
        console.error("Error fetching products by user ID:", err);
        res.status(500).json({ message: err.message });
    }
};

  

module.exports = {
    getAllProduct,
    addProduct,
    deleteProduct,
    getProductById,
    addProductWithFile,
    updateProduct,
    getAllProductsByUserId
};
