const mongoose = require("mongoose")

            /// build a schema
 const Schema = mongoose.Schema;

const UserSchema  = new Schema({
    fullname: {
        type: String
    }, 
    age:{
        type: Number
    },
    status: {
        type: Boolean,
        default:true
    },
    roleId:{
        type:Schema.Types.ObjectId,
        ref:'roles'
    },
    password:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    contact:{
        type:Number,
        unique:true
    },
    city:{
        type:String
    },
    

})
module.exports = mongoose.model("users",UserSchema)