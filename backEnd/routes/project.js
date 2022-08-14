const express = require('express');
const mongoose = require('mongoose');
const Project = require('../models/project')
const router = express.Router()



router.post('/', (req, res) => {
    console.log('here into add Projects', req.body);
    // add object to db
    const projectObj = new Project({
        nameProject: req.body.nameProject,
        description: req.body.description,
        duration: req.body.duration,
        _idTrainee: req.body._idTrainee,
        traineeship: req.body.traineeship,
       _idProfessor: req.body._idProfessor,

    });
    projectObj.save()
    res.status(200).json({mes : " saved"})


});

router.get('/', (req, res) => {
    console.log('here into get all Projects')
    //access to db and find objects
    Project.find((err, docs) => {
        if (err) {
            console.log('err data base', err)
        } else {
            res.status(200).json({
                projects: docs
            });

        }

    });

});


router.get('/:id', (req, res) => {
    console.log('here into get Project by id', req.params.id)
    Project.findOne({ _id: req.params.id }).then((result) => {
        console.log('result of get by id', result)
        if (result) {
            res.status(200).json({
                project: result
            })
        }

    })

})

router.put('/:id', (req, res) => {
    console.log('here into edit Project', req.params.id);
    console.log('here into edit Project', req.body);

    const obj = new Project({
        _id: req.body._id,
        nameProject: req.body.nameProject,
        description: req.body.description,
        duration: req.body.duration,
        _idTrainee: req.body._idTrainee,
        traineeship: req.body.traineeship,
       _idProfessor: req.body._idProfessor,


    })
    Project.updateOne({ _id: req.params.id }, obj).then((result) => {
        console.log('after update', result)
        if (result) {
            res.status(200).json({
                project: obj //affichage de obj dans cpnsole server
            })
        }

    })


})

router.delete('/:id', (req, res) => {
    console.log('here delete')
    console.log('here id', req.params.id)
    Project.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                project: 'delete with success'
            })
        }

    })
})

//don't inverse req and res
router.get('/find/allProjects',(req,res)=>{
    Project.aggregate(
        [{
            $lookup: {

                from: "users",
                localField: "_idTrainee",
                foreignField: "_id",
                as: "trainees",
            },

        },
        {
            $lookup: {
                from: "users",
                localField: "_idProfessor",
                foreignField: "_id",
                as: "professors"
            },

          
        }
        
    ]
    ,(error, docs) => {
            res.status(200).json({
            projects: docs,
            });
            }
            
            
            );



})



module.exports=router