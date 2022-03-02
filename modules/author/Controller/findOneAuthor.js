const authorModel = require("../../../DB/models/author")

module.exports=async(req,res)=>{
    
    const _id = req.params.id;
        let data = await authorModel.findOne({ _id}).select("-password")
        res.json({message:'success',data})
        
};


