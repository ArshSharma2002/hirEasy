const mongoose = require('mongoose');

// const mongoURI = 'mongodb://localhost:27017/maideasy?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
const mongoURI = 'mongodb+srv://sharmaarsh222:arsh2002@cluster0.lawqsup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectMongo = () => {
    mongoose.connect(mongoURI).then(()=>{
        console.log("successfully connected");
    }).catch((err) => {
        console.log(err)
    })
} 


module.exports = connectMongo;