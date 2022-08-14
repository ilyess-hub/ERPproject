const mongoose = require('mongoose');
const paymentSchema = mongoose.Schema({
    amount: String,
    typeOfPayment:
    {
        type: String,
        enum: ['Cash', 'Check']
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

const payment = mongoose.model('Payment', paymentSchema);
module.exports = payment;
