const authorModel = require('../../../DB/models/author')
const bcrypt = require('bcrypt');

module.exports =async(req,res,next)=>{
    
    const{name,email,age, password,address,phone,roles,avatar}= req.body
 const author =await authorModel.findOne({email})
 if (author) {
     res.json({error:"there is same email in DB"})
 } else {
     
    bcrypt.hash(password, 8, async function(err, hash) {
        if (err) {
            res.json({error:"hash err"})
        }
            const newAuthor= await authorModel.insertMany({name,email,age, password:hash,address,phone,roles,avatar})
         res.status(200).json({message:"done",newAuthor});
        }
    )}
    }
  
 