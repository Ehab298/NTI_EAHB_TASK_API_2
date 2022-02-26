const mongoose = require('mongoose');


const connecttionDB = async() =>{
    return await  mongoose.connect('mongodb://localhost/auther').then((result)=>{
        console.log("connecttionDB");
    }).catch((err)=>{
        console.log("fail to connect");
    });
}
module.exports =connecttionDB;