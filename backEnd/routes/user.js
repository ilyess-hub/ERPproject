const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user')
const _ = require('lodash');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth')
const router = express.Router()
const userController = require('../controllers/user')


router.post('/login', userController.login)

router.post('/signup', userController.signup)

router.get('/', (req, res) => {
    console.log('here into get all Users')
    //access to db and find objects
    User.find((err, docs) => {
        if (err) {
            console.log('err data base', err)
        } else {
            res.status(200).json({
                Users: docs
            });

        }

    });

});

router.get('/:id', (req, res) => {
    console.log('here into get user by id', req.params.id)
    User.findOne({ _id: req.params.id }).then((result) => {
        console.log('result of get by id', result)
        if (result) {
            res.status(200).json({
                user: result
            })
        }

    })

})

router.put('/:id', auth, (req, res) => {
    console.log('here into edit user', req.params.id);
    console.log('here into edit user', req.body);

    const obj = new User({
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        ID_Card: req.body.ID_Card,
        taxRegistrationNumber: req.body.taxRegistrationNumber,
        patent: req.body.patent,
        activityArea: req.body.activityArea,
        role: req.body.role,
        email: req.body.email,
        password: req.body.password,


    })
    User.updateOne({ _id: req.params.id }, obj).then((result) => {
        console.log('after update', result)
        if (result) {
            res.status(200).json({
                user: obj
            })
        }

    })


}) // edit 

router.delete('/:id', auth, (req, res) => {
    console.log('here delete')
    console.log('here id', req.params.id)
    User.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                user: 'delete with success'
            })
        }

    })
})




module.exports = router