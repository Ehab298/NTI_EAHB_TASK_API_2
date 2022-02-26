
const express = require('express')
const app = express();
const connecttionDB =require('./DB/dbConnection')
require('dotenv').config()

app.use(express.json())
port=process.env.PORT

const {authorRouter,newsRouter
  } = require('./router/app')

app.use(authorRouter,newsRouter)

connecttionDB()
app.listen(port,()=>{
    console.log(`isrun............${port}`);
})