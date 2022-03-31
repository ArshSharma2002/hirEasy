const express = require('express')
const connectMongo = require('./db')
const app = express()
const port = 80

connectMongo();

app.get('/',(req,res)=>{
    res.send("this is home page")
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})