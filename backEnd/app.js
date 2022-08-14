const express = require('express')
const bcrypt = require('bcrypt')
const path = require('path')
const multer = require('multer')
const bodyParser = require("body-parser")
const mongoose = require('mongoose') 
mongoose.connect('mongodb://localhost:27017/ERPDataBase')
// require all the routes --------------------------------------------------------------------------------------------------
const users = require('./routes/user')
const tests=require('./routes/test')
const sessions=require('./routes/session')
const rooms=require('./routes/room')
const projects=require('./routes/project')
const presences=require('./routes/presence')
const payments=require('./routes/payment')
const traineeships=require('./routes/traineeship')
const invoices=require('./routes/invoice')
const files=require('./routes/file')
const calendars=require('./routes/calendar')
//  building of the application  ------------------------------------------------------------------------------------------------------------
const app = express() 
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    )
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    )
    next()
})
// Prepare Response to JSON Object to send to FE
app.use(bodyParser.json())
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }))
//callBack all the routes--------------------------------------------------------------------------------------
app.use('/api/users',users)
app.use('/api/tests',tests)
app.use('/api/sessions',sessions)
app.use('/api/rooms',rooms)
app.use('/api/projects',projects)
app.use('/api/presences',presences)
app.use('/api/payments',payments)
app.use('/api/traineeships',traineeships)
app.use('/api/invoices',invoices)
app.use('/api/files',files)
app.use('/api/calendars',calendars)
//--------------------------------------------------------------------------------------------------------------------------------
module.exports = app
