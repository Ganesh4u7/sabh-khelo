const mongoose = require("mongoose");
let schema = mongoose.Schema;

let userSchema = new schema({
    username: {
        type:String,
        unique:true,
        required:true
    },
    email: {
        type:String,
        unique:true,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    phoneno:Number,
    password:String,
    gender:String,
    dob:Date,
    joinedClasses:[]
});

module.exports = userSchema;