const mongoose = require("mongoose");

const coachDataSchema = require("../models/agentSchema");
const coachData = mongoose.model('coachesData',coachDataSchema);

const login_coach = async (req,res,next)=>{

    try{
        const loginData = req.body;
        console.log(loginData);
        coachData.findOne(loginData.login, (err,data)=>{
            if(err){
                console.log(err);
                res.send({status:false,payload:'error occurred'});
            }
            else{
                if(data){
                    if(data.password ==loginData.password){
                        console.log(data);
                        if(data.activation == true){
                            res.send({status:true,payload:data})
                        }
                        else{
                            res.send({status:false,payload:"Account activation pending..."})
                        }
                        
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

module.exports = login_coach;