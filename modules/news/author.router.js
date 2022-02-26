const router =require('express').Router()
const addNewsController =require('./Controller/addnews');
const getALLController =require('./Controller/getAllnews');
const getOneController =require('./Controller/getOnenews');

const upload= require("../../middleware/multer")
const {  authentications,authorization} =require('../../middleware/authentication')


router.post('/addnews',authentications(), addNewsController)
router.post('/getAllnews',authentications(), getALLController)
router.post('/getOnenews',authentications(), getOneController)





module.exports=router