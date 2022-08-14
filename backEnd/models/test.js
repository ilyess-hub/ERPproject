const mongoose = require('mongoose')

const testSchema = mongoose.Schema({
    grade: String,
    duration: String,
    typeOfTest:
    {
        type: String,
        enum: ['daily', 'final']
    },
    _idTraineeship:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Traineeship'
    },
    _idStudent:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const test = mongoose.model('Test', testSchema);
module.exports = test;
