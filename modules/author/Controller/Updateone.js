
const authorModel = require('../../../DB/models/author');




module.exports= async(req, res) => {
    const {name,email,age, password,address,phone,roles} = req.body;
    const _id = req.params.id
      await authorModel.updateOne({ _id: _id }, {name,email,age, password,address,phone,roles},{new:true}).then(() => {
        res.status(200).json({message:"done"});
    })
   
};