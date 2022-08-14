const mongoose = require('mongoose')

const sessionSchema = mongoose.Schema({
   nameSession:String,
   duration:String,
   dateOfSession:String,

});

const session = mongoose.model('Session', sessionSchema);
module.exports = session;
