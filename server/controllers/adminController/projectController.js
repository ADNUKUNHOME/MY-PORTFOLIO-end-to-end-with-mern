const Project = require("../../model/projectModel");


const addProject = async (req, res) => {

    try {
        const { title, description, deployUrl, technologies, image1, image2, image3, image4 } = req.body;
        if (!title || !description || !deployUrl || !technologies || !image1 || !image2) {
            return res.status(400).json({
                success: false,
                message: 'You Must Fill All Fields!'
            })
        }

        const newProject = new Project({
            title: title,
            description: description,
            deployUrl: deployUrl,
            technologies: technologies,
            image1: image1,
            image2: image2,
            image3: image3,
            image4: image4
        })

        await newProject.save();

        return res.status(200).json({
            success: true,
            message: 'Project Added Successfully...',
            data: newProject
        })

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            success: false,
            message: 'Some error Occured'
        })
    }
}


const editProject = async (req, res) => {

    try {

        const { id } = req.params;
        const { title, description, deployUrl, technologies, image1, image2, image3, image4 } = req.body;


        const updatedProject = await Project.findByIdAndUpdate(id, { $set: { title, description, deployUrl, technologies, image1, image2, image3, image4 } }, {new: true});
        if (!updatedProject) {
            return res.status(404).json({
                success: false,
                message: 'Project Not Found!'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Project Updated Successfully...',
            data: updatedProject
        })

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            success: false,
            message: 'Some error Occured'
        })
    }
}


const deleteProject = async (req, res) => {

    try {
        const { projectId } = req.params;

        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'The Project is not exist!'
            })
        }

        await Project.findByIdAndDelete(projectId);
        return res.status(200).json({
            success: true,
            message: 'Project is deleted Successfully...'
        })

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            success: false,
            message: 'Some error Occured'
        })
    }
}


const getAllProjects = async (req, res) => {

    try {
        const allProjects = await Project.find();
        if (!allProjects) {
            return res.status(400).json({
                success: false,
                message: 'Projects are empty'
            })
        }

        return res.status(200).json({
            success: true,
            data: allProjects
        })

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            success: false,
            message: 'Some error Occured'
        })
    }
}



module.exports = { addProject, editProject, deleteProject, getAllProjects };