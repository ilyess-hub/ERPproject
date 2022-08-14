const mongoose = require('mongoose')
const projectSchema = mongoose.Schema({
    nameProject: String,
    description: String,
    duration: String,
    _idTrainee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    traineeship: {
        type: String,
        enum: ['PFE', 'ETE']

    },
    _idProfessor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const project = mongoose.model('Project', projectSchema);
module.exports = project;
