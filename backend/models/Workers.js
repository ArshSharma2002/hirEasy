const mongoose = require('mongoose');

const WorkerSchema = new mongoose.Schema({



    name : {
        type : String,
        required : true,   
    },
    age : {
        type:String,
        required : true
    },
    gender : {
        type:String,
        required : true
    },
    address : {
        type:String,
        required : true
    },
    city : {
        type:String,
        required : true
    },
    email : {
        type: String,
        required:true,
        unique :true
    },
    contact : {
        type: Number,
        required : true,
        unique: true
    },
    services : {
        type: String,
        required:true
    },
    experience : {
        type: String,
        required:true
    }

    
  });

const worker = mongoose.model('worker', WorkerSchema);
module.exports = worker; 