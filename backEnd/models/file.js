const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
    details: String,
    _idStudent:
     {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }


});

const file = mongoose.model('File', fileSchema);
module.exports = file;
