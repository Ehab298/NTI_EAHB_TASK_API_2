const mongoose = require('mongoose')

const NewsSchema =new mongoose.Schema( {
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: Buffer
    },
    owner:{type:mongoose.Schema.Types.ObjectId,ref:"author"}
})

module.exports=mongoose.model("News",NewsSchema )


