const router =require('express').Router()
const authorController =require('./Controller/Signup');
const authorsignController =require('./Controller/Signin');
const findALLController =require('./Controller/findALLAuthor');
const findOneController =require('./Controller/findOneAuthor');
const deleteController =require('./Controller/Deleteauthor');
const updateController =require('./Controller/Updateone');


const upload = require('../../middleware/multer')
const {  authentications,authorization} =require('../../middleware/authentication')

router.get("/getAllauthor",authentications(),authorization(['author']),findALLController)
router.get("/getOneauthor/:id",authentications(),findOneController)
router.delete("/delete/:id",authentications(),deleteController)
router.patch("/upDate/:id",authentications(),updateController)

router.post("/signup",upload.single('avatar'),authorController)

router.post("/signin",authorsignController)






module.exports=router