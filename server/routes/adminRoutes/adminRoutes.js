const express = require('express');
const { addProject, editProject, deleteProject, getAllProjects } = require('../../controllers/adminController/projectController');
const router = express.Router();


router.post('/add', addProject);
router.put('/edit/:id', editProject);
router.delete('/delete/:projectId', deleteProject);
router.get('/get', getAllProjects);


module.exports = router;