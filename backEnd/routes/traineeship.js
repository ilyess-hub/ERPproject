
const express = require('express');
const mongoose = require('mongoose');
const Traineeship = require('../models/traineeship')
const router = express.Router()



router.post('/', (req, res) => {
    console.log('here into add Traineeships', req.body);
    // add object to db
    const traineeshipObj = new Traineeship({
        nameOfTraineeship: req.body.nameOfTraineeship,
        state: req.body.state,
        numberOfHours: req.body.numberOfHours,
        startDate: req.body.startDate,
        finalDate: req.body.finalDate,
        price: req.body.price,
        traineeship:req.body.traineeship 
    });
    traineeshipObj.save()
    res.status(200).json({mes : " saved"})


});

router.get('/', (req, res) => {
    console.log('here into get all Traineeships')
    //access to db and find objects
    Traineeship.find((err, docs) => {
        if (err) {
            console.log('err data base', err)
        } else {
            res.status(200).json({
                Traineeships: docs
            });

        }

    });

});

router.get('/:id', (req, res) => {
    console.log('here into get Traineeships by id', req.params.id)
    Traineeship.findOne({ _id: req.params.id }).then((result) => {
        console.log('result of get by id', result)
        if (result) {
            res.status(200).json({
                Traineeship: result
            })
        }

    })

})

router.put('/:id', (req, res) => {
    console.log('here into edit Traineeships', req.params.id);
    console.log('here into edit Traineeships', req.body);

    const obj = new Traineeship({
        _id: req.body._id,
        nameOfTraineeship: req.body.nameOfTraineeship,
        state: req.body.state,
        numberOfHours: req.body.numberOfHours,
        startDate: req.body.startDate,
        finalDate: req.body.finalDate,
        price: req.body.price,
        traineeship:req.body.traineeship 


    })
    Traineeship.updateOne({ _id: req.params.id }, obj).then((result) => {
        console.log('after update', result)
        if (result) {
            res.status(200).json({
                message: obj //affichage de obj dans console server
            })
        }

    })


})

router.delete('/:id', (req, res) => {
    console.log('here delete')
    console.log('here id', req.params.id)
    Traineeship.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            })
        }

    })
})
module.exports=router