const newsModel = require('../../../DB/models/News')


module.exports =async(req,res,next)=>{
    
    const{title,description}= req.body
 const news =await newsModel.findOne({title})
 if (news) {
     res.json({error:"there is same title"})
 } else {
     debugger
            const newAuthor= await newsModel.insertMany({title,description, owner:req.author.id,image:req.files})
         res.status(200).json({message:"done",newAuthor});
        }
    }
    
  
 