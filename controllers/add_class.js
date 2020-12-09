const mongoose = require("mongoose");

const classSchema = require("../models/classSchema");
const classesData = mongoose.model('classes',classSchema);


const add_class = async (req,res,next) => {

    try{
        let classDataObj = req.body;
        console.log(classDataObj.imgUrl);

        let data = new classesData(classDataObj);
        

        data.save((err,data)=>{
            if(err){
                console.log(err);
                res.send({status:false,payload:"Error Occurred"});
            }
            else{
                res.send({status:true,payload:"Class Added Successfully"});
            }
        });

    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error Occurred"});
    }
}

module.exports = add_class;