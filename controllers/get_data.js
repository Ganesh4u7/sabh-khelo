const get_data = async (req,res,next)=>{
    try{
        res.send("Hello World !!!");
    }
    catch(error){
        console.log(error);
        res.send("Error Occurred");
    }
}

module.exports = get_data;