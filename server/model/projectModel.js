const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, reqiured: true },
    technologies: { type: String, required: true },
    description: { type: String, required: true },
    deployUrl: { type: String, required: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, default: '' },
    image4: { type: String, default: '' },
})

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;