const mongoose = require('mongoose');
const invoiceSchema = mongoose.Schema({
    amount: String,
    typeOfDocument:
    {
        type: String,

        enum: ['invoice', 'quotation']
    },
    _idClient:

    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment'
    },
    _idFile:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File'
    }
});

const invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = invoice;
