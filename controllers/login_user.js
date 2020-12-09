const mongoose = require("mongoose");

const userDataSchema = require("../models/userSchema");
const userData = mongoose.model('userData',userDataSchema);

const login_user = async (req,res,next)=>{

    try{
        const loginData = req.body;

        userData.findOne(loginData.login, (err,data)=>{
            if(err){
                console.log(err);
                res.send({status:false,payload:'error occurred'});
            }
            else{
                if(data){
                    if(data.password ==loginData.password){
                        console.log(data);
                        res.send({status:true,payload:data})
                    }
                    else{
                        res.send({status:false,payload:"Invalid Credentials"});
                    }
                    
                }
                else{
                    res.send({status:false,payload:"Invalid User"});
                }
            }
        });
    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error occurred"});
    }
};

module.exports = login_user;