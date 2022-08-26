const express = require('express');
const mongoose = require('mongoose');
const File = require('../models/File')
const router = express.Router()


router.post('/', (req, res) => {
    console.log('here into add Files', req.body);
    // add object to db
    const fileObj = new File({
    _idPayment:req.body._idPayment,
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
                files: docs
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
                file: result
            })
        }

    })

})


router.put('/:id', (req, res) => {
    console.log('here into edit File', req.params.id);
    console.log('here into edit File', req.body);

    const obj = new File({
        _idFile: req.body._idFile,
        _idPayment:req.body._idPayment,
        _idStudent:req.body._idStudent
    })
    File.updateOne({ _idFile: req.params.id }, obj).then((result) => {
        console.log('after update', result)
        if (result) {
            res.status(200).json({
                file: obj 
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

router.get("/find/allFiles",(req,res)=>{
    File.aggregate(
        [

        {
           $lookup:{

            from: "payments",
            localField: "_idPayment",
            foreignField: "_id",
            as: "payments"
           }
          },
          
          {
           $unwind:{
            path: "$payments",
           }
          },
          
          {
            $lookup:{
                from: "traineeships",
            localField: "payments._idTraineeship",
            foreignField: "_id",
            as: "traineeships"
            }
          },
          
          {
           $lookup:{

            from: "users",
            localField: "_idStudent",
            foreignField: "_id",
            as: "students"
           }
          },
          
          {
          $project:{

            "total":1,
          "traineeships.nameOfTraineeship":1,
          "payments.amount":1,
          "students.firstName":1,
          "students.lastName":1,
          "students._id":1,
          }
          },
          
          {
           $group:{
            _idFile:{$first:"$_id"},
            _id: "$students._id",
            firstName:{$first:"$students.firstName"},
            lastName:{$first:"$students.lastName"},
            nameOfTraineeship:{$addToSet:"$traineeships.nameOfTraineeship"},
            total: {
                $sum: {$toInt:"$payments.amount"}
              },
           }
          }

    ],(error, docs) => {
        res.status(200).json({
        files: docs,
        });
        }
    
    
    )
})
module.exports=router