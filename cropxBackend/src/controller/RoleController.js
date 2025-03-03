const roleModel = require("../models/RoleModels")

const getAllRoles = async (req ,res) => {

    const roles = await roleModel.find()
    res.json({
        message: "role fetched successfully",
        data: roles
    })
}

const addRole = async(req ,res) => {
    const addData = await roleModel.create(req.body);
    res.json({
        message:"ok .. . ",
        data:addData
    })
}

const deleteRole = async(req, res) => {
    const deleteData = await roleModel.findByIdAndDelete(req.params.id)
    res.json({
        message:"deleted ...",
        data:deleteData
    })
}

const foundRole = async(req ,res) => {
    const foundData = await roleModel.findById(req.params.id)
    res.json({
        message:"Founded  . . . ",
        data:foundData
    })
}
module.exports = 
                {getAllRoles 
                , addRole
                ,deleteRole
                ,foundRole}