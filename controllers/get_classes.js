const mongoose = require("mongoose");

const classSchema = require("../models/classSchema");
const classesData = mongoose.model('classes',classSchema);

const userDataSchema = require("../models/userSchema");
const userData = mongoose.model('userData',userDataSchema);

const get_classes = async ( req,res,next) =>{

    try{
        let username = req.body.username;
        let joinedClasses;

     await userData.findOne({username},(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
               
                joinedClasses = data.joinedClasses;
                console.log(joinedClasses);

                classesData.find({_id:{$nin:joinedClasses}},{},{limit:10},(err,data)=>{
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
        });

    

    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error Occurred"});
    }
}

module.exports = get_classes;