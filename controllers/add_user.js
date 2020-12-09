
const mongoose = require("mongoose");

const userDataSchema = require("../models/userSchema");
const userData = mongoose.model('userData',userDataSchema);

const add_user = async (req,res,next) =>{

    try{
        let userDataObj = req.body;

        console.log(userDataObj);
        let data = new userData(userDataObj);

        data.save((err,data)=>{
            if(err){
                console.log(err);
                res.send({status:false,payload:"Error occurred"});
            }
            else{
                res.send({status:true,payload:"User Registered Successfully"});
            }
        })

    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error occurred"});
    }
}

module.exports = add_user;