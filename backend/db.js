const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/maideasy?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
const connectMongo = () => {
    mongoose.connect(mongoURI).then(()=>{
        console.log("successfully connected");
    }).catch((err) => {
        console.log(err)
    })
} 


module.exports = connectMongo;