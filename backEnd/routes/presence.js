const express = require('express');
const mongoose = require('mongoose');
const Presence = require('../models/presence')
const router = express.Router()



router.post('/', (req, res) => {
    console.log('here into add presences', req.body);
    // add object to db
    const presenceObj = new Presence({
        presence: req.body.presence,
        _idSession: req.body._idSession,
        _idStudent: req.body._idStudent

    });
    presenceObj.save()
    res.status(200).json({mes : " saved"})


});

router.get('/', (req, res) => {
    console.log('here into get all presences')
    //access to db and find objects
    Presence.find((err, docs) => {
        if (err) {
            console.log('err data base', err)
        } else {
            res.status(200).json({
                Presences: docs
            });

        }

    });

});

router.get('/:id', (req, res) => {
    console.log('here into get presence by id', req.params.id)
    Presence.findOne({ _id: req.params.id }).then((result) => {
        console.log('result of get by id', result)
        if (result) {
            res.status(200).json({
                presence: result
            })
        }

    })

})


router.put('/:id', (req, res) => {
    console.log('here into edit presence', req.params.id);
    console.log('here into edit presence', req.body);

    const obj = new Presence({
        _id: req.body._id,
        presence: req.body.presence,
        _idSession: req.body._idSession,
        _idStudent: req.body._idStudent


    })
    Presence.updateOne({ _id: req.params.id }, obj).then((result) => {
        console.log('after update', result)
        if (result) {
            res.status(200).json({
                message: obj 
            })
        }

    })


})

router.delete('/:id', (req, res) => {
    console.log('here delete')
    console.log('here id', req.params.id)
    Presence.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            })
        }

    })
})
module.exports=router