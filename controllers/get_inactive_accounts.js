const mongoose = require("mongoose");

const coachDataSchema = require("../models/agentSchema");
const coachData = mongoose.model('coachesData',coachDataSchema);


const inactive_accounts = async (req,res,next)=>{

    try{

       coachData.find({activation:false},(err,data)=>{
           if(err){
               console.log(err);
               res.send({status:false,payload:"Error Occurred"});
           }
           else{
               res.send({status:true,payload:data});
           }
       })
    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error Occurred"});
    }
}


module.exports = inactive_accounts;