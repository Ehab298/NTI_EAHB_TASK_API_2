const newsModel = require('../../../DB/models/News')

module.exports=async(req,res)=>{
     
    let data = await newsModel.find().populate('owner')
    res.status(200).json({message:'success',data})
    
}




