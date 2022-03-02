const newsModel = require('../../../DB/models/News')


module.exports =async (req, res) => {
    const _id = req.params.id;
    await newsModel.deleteMany({_id}).then(()=> res.status(200).json({message:'success'}))

};