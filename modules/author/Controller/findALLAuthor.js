const authorModel = require("../../../DB/models/author")

module.exports=async(req,res)=>{
     
    let data = await authorModel.find().select("-password")
    res.status(200).json({message:'success',data})
    
}




