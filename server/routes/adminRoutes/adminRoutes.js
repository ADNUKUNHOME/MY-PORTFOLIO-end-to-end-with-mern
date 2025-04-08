const express = require('express');
const { addProject, editProject, deleteProject, getAllProjects } = require('../../controllers/adminController/projectController');
const { upload } = require('../../config/cloudinary');
const router = express.Router();


router.post('/add',upload.array('images', 4), addProject);
router.put('/edit/:projectId', editProject);
router.delete('/delete/:projectId', deleteProject);
router.get('/get', getAllProjects);


module.exports = router;