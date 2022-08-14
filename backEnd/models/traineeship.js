const mongoose = require('mongoose');
const traineeshipSchema = mongoose.Schema({
    nameOfTraineeship: String,
    state: String,
    numberOfHours: String,
    startDate: String,
    finalDate: String,
    price: String,
    traineeship:
    {
        type: String,
        enum: ['bootCamp', 'partTime']
    }
});

const traineeship = mongoose.model('Traineeship', traineeshipSchema);
module.exports = traineeship;
