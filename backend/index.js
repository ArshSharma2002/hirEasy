const express = require('express')
const connectMongo = require('./db')
const app = express()
const cors = require('cors')
const port = 80

connectMongo();

app.use(cors())
app.use(express.json())
// app.get('/',(req,res)=>{
//     res.send("this is home page")
// })

// app.use("/api/auth" , require("./routes/auth"))
app.use("/api/workers" , require("./routes/workers"))

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})