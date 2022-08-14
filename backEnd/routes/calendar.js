const express = require('express');
const mongoose = require('mongoose');
const Calendar = require('../models/calendar')
const router = express.Router()
//------------------------------------------------------------------------------------------


router.post('/', (req, res) => {
    console.log('here into add Calendars', req.body);
    // add object to db
    const calendarObj = new Calendar({
        _idTraineeship:req.body._idTraineeship,
        _idRoom:req.body._idRoom,
        sessions :req.body.sessions,
    });
    calendarObj.save()
    res.status(200).json({mes : " saved"})
});


router.get('/', (req, res) => {
    console.log('here into get all Calendars')
    //access to db and find objects
    Calendar.find((err, docs) => {
        if (err) {
            console.log('error data base', err)
        } else {
            res.status(200).json({
                Calendars: docs
            });
        }
    });

});

router.get('/:id', (req, res) => {
    console.log('here into get Calendar by id', req.params.id)
    Calendar.findOne({ _id: req.params.id }).then((result) => {
        console.log('result of get by id', result)
        if (result) {
            res.status(200).json({
                Calendar: result
            })
        }

    })

})

router.put('/:id', (req, res) => {
    console.log('here into edit Calendar', req.params.id);
    console.log('here into edit Calendar', req.body);

    const obj = new Facture({
        _id: req.body._id,
        _idTraineeship:req.body._idTraineeship,
        _idRoom:req.body._idRoom,
        sessions :req.body.sessions,

    })
    Calendar.updateOne({ _id: req.params.id }, obj).then((result) => {
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
    Calendar.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            })
        }

    })
})


module.exports=router