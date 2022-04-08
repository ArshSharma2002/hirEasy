const mongoose = require('mongoose');

const WorkerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,   
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
    }

    // baby sitting
    // maid (cooking )
    // maid (washing)
    // maid (complete package)

    
  });

const worker = mongoose.model('worker', WorkerSchema);
module.exports = worker; 