const express = require('express');
const mongoose = require('mongoose');
const File = require('../models/File')
const router = express.Router()


router.post('/', (req, res) => {
    console.log('here into add Files', req.body);
    // add object to db
    const fileObj = new File({
        details:req.body.details,
    _idStudent:req.body._idStudent
    });
    fileObj.save()
    res.status(200).json({mes : " saved"})
});

router.get('/', (req, res) => {
    console.log('here into get all Files')
    //access to db and find objects
    File.find((err, docs) => {
        if (err) {
            console.log('error in data base', err)
        } else {
            res.status(200).json({
                Files: docs
            });

        }

    });

});

router.get('/:id', (req, res) => {
    console.log('here into get File by id', req.params.id)
    File.findOne({ _id: req.params.id }).then((result) => {
        console.log('result of get by id', result)
        if (result) {
            res.status(200).json({
                File: result
            })
        }

    })

})


router.put('/:id', (req, res) => {
    console.log('here into edit File', req.params.id);
    console.log('here into edit File', req.body);

    const obj = new File({
        _id: req.body._id,
        details:req.body.details,
        _idStudent:req.body._idStudent
    })
    File.updateOne({ _id: req.params.id }, obj).then((result) => {
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
    File.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            })
        }

    })
})

module.exports=router