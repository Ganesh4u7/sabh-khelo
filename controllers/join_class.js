const mongoose = require("mongoose");

const classSchema = require("../models/classSchema");
const classesData = mongoose.model('classes',classSchema);

const userDataSchema = require("../models/userSchema");
const userData = mongoose.model('userData',userDataSchema);


const join_class = async(req,res,next)=>{

    try{
        let username = req.body.username;
        let id = req.body.id;

        classesData.findById({_id:id},(err,data)=>{
            if(err){
                console.log(err);
                res.send({status:false,payload:"Error Occurred"});
            }
            else{
                console.log(data);
                let totalMembers = data.members - data.joinedPeople.length;
                console.log(totalMembers);
                if(totalMembers > 0){
                 
                classesData.findByIdAndUpdate({_id:id},{$push:{
                    joinedPeople:username
                }},function(err,data){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log(data)
                    }
                });
        
                userData.findOneAndUpdate({username},{$push:{
                    joinedClasses:id
                }},function(err,data){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log(data)
                    }
                });
        
                res.send({status:true,payload:"Class Joined"});
                   
            }
            else{
                res.send({status:false,payload:"No slots left"});
            }

                
            }
        });

        


    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error Occurred"});
    }
};

module.exports = join_class;