const mongoose = require('mongoose')
const calendarSchema = mongoose.Schema({
    _idTraineeship:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Traineeship'
    },
    _idRoom:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    sessions: [{
        _id: mongoose.Schema.Types.ObjectId,
        nameSession: String,
        duration: String,
        dateOfSession: String,
    }]
});

const calendar = mongoose.model('Calendar', calendarSchema);
module.exports = calendar;
