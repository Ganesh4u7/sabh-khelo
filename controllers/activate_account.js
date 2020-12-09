const mongoose = require("mongoose");

const coachDataSchema = require("../models/agentSchema");
const coachData = mongoose.model('coachesData',coachDataSchema);


const activate_account = async (req,res,next)=>{

    try{
       let id = req.body.id;
       console.log(id);

       coachData.findByIdAndUpdate({_id:id},{$set:{activation:true}},(err,data)=>{
           if(err){
               console.log(err);
               res.send({status:false,payload:"Error Occurred"});
           }
           else{
               res.send({status:true,payload:"Account Activated"});
           }
       })
    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error Occurred"});
    }
}


module.exports = activate_account;