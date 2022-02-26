const newsModel = require("../../../DB/models/author")

module.exports=async(req,res)=>{
     
    let data = await newsModel.find()
    res.status(200).json({message:'success',data})
    
}




