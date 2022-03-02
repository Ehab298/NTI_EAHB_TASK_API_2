
const newsModel = require('../../../DB/models/News')




module.exports= async(req, res) => {
    const {title,description} = req.body;
    const _id = req.params.id
      await newsModel.updateOne({ _id: _id }, {title,description},{new:true}).then(() => {
        res.status(200).json({message:"done"});
    })
   
};