
const mongoose = require('mongoose');
const joi = require('joi');
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    taxRegistrationNumber: String,
    patent: String,
    activityArea: String,
    firstName: {
        type:String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    lastName: {
        type:String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    ID_Card: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    phoneNumber: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    address: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    
    role: {
        type: String,
        required:true,
        enum: ['student', 'superAdmin', 'manager', 'professor'],

    },
    email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
        unique: true

    },

    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100

    },

});

userSchema.plugin(uniqueValidator)

const user = mongoose.model('User', userSchema);

module.exports = user;


