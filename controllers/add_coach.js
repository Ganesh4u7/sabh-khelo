
const mongoose = require("mongoose");

const coachDataSchema = require("../models/agentSchema");
const coachData = mongoose.model('coachesData',coachDataSchema);

const add_coach = async (req,res,next) =>{

    try{
        let userDataObj = req.body;

        console.log(userDataObj);
        let data = new coachData({
            ...userDataObj,
            activation:false
        });

        data.save((err,data)=>{
            if(err){
                console.log(err);
                res.send({status:false,payload:"Error occurred"});
            }
            else{
                res.send({status:true,payload:"Coach Registered Successfully"});
            }
        })

    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error occurred"});
    }
}

module.exports = add_coach;