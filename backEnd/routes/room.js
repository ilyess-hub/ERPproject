const express = require('express');
const mongoose = require('mongoose');
const Room = require('../models/room')
const router = express.Router()





router.post('/', (req, res) => {
    console.log('here into add Rooms', req.body);
    // add object to db
    const roomObj = new Room({
        numberOfPlaces:req.body.numberOfPlaces,
    availablity:req.body.availablity,
    });
    roomObj.save()
    res.status(200).json({mes : " saved"})

});

router.get('/', (req, res) => {
    console.log('here into get all Rooms')
    //access to db and find objects
    Room.find((err, docs) => {
        if (err) {
            console.log('err data base', err)
        } else {
            res.status(200).json({
                rooms: docs
            });

        }

    });

});

router.get('/:id', (req, res) => {
    console.log('here into get Room by id', req.params.id)
    Room.findOne({ _id: req.params.id }).then((result) => {
        console.log('result of get by id', result)
        if (result) {
            res.status(200).json({
                room: result
            })
        }

    })

})

router.put('/:id', (req, res) => {
    console.log('here into edit Room', req.params.id);
    console.log('here into edit Room', req.body);

    const obj = new Room({
        _id: req.body._id,
        numberOfPlaces:req.body.numberOfPlaces,
        availability:req.body.availablity,


    })
    Room.updateOne({ _id: req.params.id }, obj).then((result) => {
        console.log('after update', result)
        if (result) {
            res.status(200).json({
                room: obj 
            })
        }

    })


})

router.delete('/:id', (req, res) => {
    console.log('here delete')
    console.log('here id', req.params.id)
    Room.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                room: 'delete with success'
            })
        }

    })
})
module.exports=router