const express = require('express');
const mongoose = require('mongoose');
const Invoice = require('../models/invoice')
const router = express.Router()

router.post('/', (req, res) => {
    console.log('here into add Invoices', req.body);
    // add object to db
    const invoiceObj = new Invoice({
        amout:req.body.amout,
        typeOfDocument:req.body.typeOfDocument,
        _idClient:req.body._idClient,
        _idFile:req.body._idFile
     

    });
    invoiceObj.save()
    res.status(200).json({mes : " saved"})


});

router.get('/', (req, res) => {
    console.log('here into get all Invoices')
    //access to db and find objects
    Invoice.find((err, docs) => {
        if (err) {
            console.log('err data base', err)
        } else {
            res.status(200).json({
                Invoices: docs
            });

        }

    });

});

router.get('/:id', (req, res) => {
    console.log('here into get Invoice by id', req.params.id)
    Invoice.findOne({ _id: req.params.id }).then((result) => {
        console.log('result of get by id', result)
        if (result) {
            res.status(200).json({
                Invoice: result
            })
        }

    })

})

router.put('/:id', (req, res) => {
    console.log('here into edit Invoice', req.params.id);
    console.log('here into edit Invoice', req.body);

    const obj = new Invoice({
        _id: req.body._id,
        typeOfDocument:req.body.typeOfDocument,
        _idClient:req.body._idClient,
        _idFile:req.body._idFile


    })
    Invoice.updateOne({ _id: req.params.id }, obj).then((result) => {
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
    Invoice.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            })
        }

    })
})
module.exports=router