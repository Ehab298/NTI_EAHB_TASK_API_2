
const authorModel = require('../../../DB/models/author');


module.exports =async (req, res) => {
    const _id = req.params.id;
    await authorModel.deleteMany({_id}).then(()=> res.status(200).json({message:'success'}))

};