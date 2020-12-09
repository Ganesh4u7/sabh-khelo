const mongoose = require("mongoose");
let schema = mongoose.Schema;


const classSchema = new schema({
        topic:String,
        description:String,
        instructor:String,
        price:Number,
        materials:String,
        startDate:Date,
        prerequisite:String,
        creator:String,
        createdAt:Date,
        location:String,
        duration:String,
        timePeriod:Number,
        members:Number,
        joinedCount:Number,
        joinedPeople:[],
        imgUrl:String,
        gender:[],
        mode:String,
        priceMode:String,
        sportType:String,
        groupType:[],
        level:[],
        things:[]
});

module.exports = classSchema;