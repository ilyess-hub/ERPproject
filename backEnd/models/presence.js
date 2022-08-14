const mongoose = require('mongoose')

const presenceSchema = mongoose.Schema({
    presence: Boolean,
    _idSession:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session'
    },

    _idStudent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const presence = mongoose.model('Presence', presenceSchema);
module.exports = presence;
