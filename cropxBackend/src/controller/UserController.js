const userModel = require("../models/UserModels")
const bcrypt = require("bcrypt")

const loginUser = async (req, res) => {
    try {
        const  email = req.body.email;
        const  password = req.body.password;

        const foundUserFromEmail = await userModel.findOne({ email: email }).populate('roleId')

        if (!foundUserFromEmail) {
            console.log("Email Not Found");
            return res.status(404).json({ message: "Email not found" });
        }   


        const isMatch = await bcrypt.compare(password, foundUserFromEmail.password);
        console.log("Password Match Result:", isMatch);

        if (!isMatch) {
            console.log("Invalid Credentials");
            return res.status(401).json({ message: "Invalid credentials" });
        }

        console.log("Login Successful");
        return res.status(200).json({
            message: "Login success",
            data: foundUserFromEmail
        });

    } catch (error) {
        console.error("🚨 Error during login:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const signUp = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        req.body.password = hashedPassword;
        const createdUser = await userModel.create(req.body);

        res.status(201).json({
            message: "User created successfully.",
            data: createdUser
        });

    } catch (err) {
        console.error("🚨 Signup Error:", err);
        res.status(500).json({
            message: "Error",
            data: err
        });
    }
};

const addUser = async (req ,res) => {
    const addUserData = await userModel.create(req.body)
    res.json({
        message:"User Added",
        data:addUserData
    })
}

const deleteUser = async(req,res) => {
    const deleteUserData = await userModel.findByIdAndDelete(req.params.id)
    res.json({
        message:"User Deleted",
        data: deleteUserData
    })
}

const findUser = async(req,res) => {
    const findUserData = await userModel.findById(req.params.id)
    res.json({
        message:"User Found",
        data: findUserData
    })
}

const getAllUser = async(req, res) => {
    const getAllUserData = await userModel.find().populate("roleId")
    res.json({
        message:"Data Fetched",
        data: getAllUserData
    })
}


module.exports = {
                addUser,
                deleteUser,
                findUser,
                getAllUser,
                signUp,
                loginUser  }