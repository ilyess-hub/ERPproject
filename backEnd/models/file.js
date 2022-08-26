const mongoose = require('mongoose')


const fileSchema = mongoose.Schema({
    _idStudent:{
       type: mongoose.Schema.Types.ObjectId,
       ref:"User"
    },
    
    _idPayment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Payment"
    }
});
const file = mongoose.model('File', fileSchema);
module.exports = file;