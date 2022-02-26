
const jwt = require('jsonwebtoken')
const authorModel =require('../DB/models/author')

const authentications= () => {
    return async (req, res, next) => {
        debugger

        const token = req.headers["authorization"]?.split(' ')[1]

       console.log('here1');
        if (!token || token == null || token == undefined) {
            res.json({ error: "in-valid token" })
        } else {

            jwt.verify(token, 'shhhhh',async function (err, decoded) {
                if (err) {
                    res.status(400).json({ error: "in-valid signature" })
                } else {
                    console.log('here2');
                    req.author = decoded
                    console.log(decoded);
                    console.log('here3');
                    const author= await authorModel.findOne({_id:decoded._id})
                    console.log(author);
                   
                    req.author=author
                    next()
                }


            });

        }
    }
}

const authorization= (data) => {
    return async (req, res, next) => {

        if (data.includes(req.author.roles)) {
            next()
        } else {
            res.json({ error: "not auth user" })

        }
    }
}
module.exports={
    authentications
    ,authorization
}
