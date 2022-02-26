const authorModel = require('../../../DB/models/author');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    
    const { email,password } = req.body;
    const  author = await authorModel.findOne({ email });
    console.log( author);
    if (!author) {
        res.status(400).json({message:'in-valid  author'})
    } 
    
    else {
        
    
        const match = await bcrypt.compare(password, author.password);

        if(match) {
            var token = jwt.sign({ id:password._id,roles: author.roles,_id:author._id}, 'shhhhh');
            res.status(200).json({token, name: author.name, email: author.email, roles: author.roles})
        }
        else{
            res.status(400).json({message:"in-valid  author123"});
        }

      

    }

}
