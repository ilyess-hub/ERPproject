const express = require('express');
const mongoose = require('mongoose');
const Session = require('../models/session')
const router = express.Router()




router.post('/', (req, res) => {
    console.log('here into add Session', req.body);
    // add object to db
    const SessionObj = new Session({
        nameSession: req.body.nameSession,
        duration: req.body.duration,
        dateOfSession: req.body.dateOfSession,
    });
    SessionObj.save()
    res.status(200).json({mes : " saved"})

});

router.get('/', (req, res) => {
    console.log('here into get all Session')
    //access to db and find objects
    Session.find((err, docs) => {
        if (err) {
            console.log('error in the  data base', err)
        } else {
            res.status(200).json({
                sessions: docs
            });

        }

    });

});

router.get('/:id', (req, res) => {
    console.log('here into get session by id', req.params.id)
    Session.findOne({ _id: req.params.id }).then((result) => {
        console.log('result of get session by id', result)
        if (result) {
            res.status(200).json({
                session: result
            })
        }

    }) 

})

router.put('/:id', (req, res) => {
    console.log('here into edit session', req.params.id);
    console.log('here into edit session', req.body);

    const obj = new Session({
        _id: req.body._id,
        nameSession: req.body.nameSession,
        duration: req.body.duration,
        dateOfSession: req.body.dateOfSession,


    })
    Session.updateOne({ _id: req.params.id }, obj).then((result) => {
        console.log('after update', result)
        if (result) {
            res.status(200).json({
                session: obj 
            })
        }

    })


})

router.delete('/:id', (req, res) => {
    console.log('here delete')
    console.log('here id', req.params.id)
    Session.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                session: 'delete with success'
            })
        }

    })
})
module.exports=router