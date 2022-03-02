const router =require('express').Router()
const addNewsController =require('./Controller/addnews');
const getALLController =require('./Controller/getAllnews');
const getOneController =require('./Controller/getOnenews');
const updatenewsController =require('./Controller/updatenews');
const deleteoneController =require('./Controller/deleteone');

const upload= require("../../middleware/multer")
const {  authentications,authorization} =require('../../middleware/authentication')


router.post('/addnews',authentications(), addNewsController)
router.get('/getAllnews',authentications(), getALLController)
router.get('/getOnenews/:id',authentications(), getOneController)
router.patch('/updatenews/:id',authentications(), updatenewsController)
router.delete('/deleteone/:id',authentications(), deleteoneController)






module.exports=router