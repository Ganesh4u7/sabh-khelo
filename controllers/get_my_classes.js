const mongoose = require("mongoose");

const classSchema = require("../models/classSchema");
const classesData = mongoose.model('classes',classSchema);

const get_my_classes = async ( req,res,next) =>{

    try{

        let username = req.body.username;
        console.log(username);
        let type = req.body.type;

        let today = new Date().setHours(0,0,0,0);
        console.log(today);
         if(type=="upcoming"){
          
            classesData.find({creator:username,startDate:{$gte:today}},(err,data)=>{
                if(err){
                    console.log(error);
                    res.send({status:false,payload:"Error Occurred"});
                }
                else{
                    console.log(data);
                    res.send({status:true,payload:data});
                }
            });
          
        } 
        else if(type=="previous"){
            classesData.find({creator:username,startDate:{$lte:today}},(err,data)=>{
                if(err){
                    console.log(error);
                    res.send({status:false,payload:"Error Occurred"});
                }
                else{
                    console.log(data);
                    res.send({status:true,payload:data});
                }
            });
        }

    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error Occurred"});
    }
}

module.exports = get_my_classes;