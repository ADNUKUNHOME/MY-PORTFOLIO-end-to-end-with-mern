const express = require('express');
const { userContactSubmission, getUserContacts } = require('../../controllers/userController.js/contactController');
const router = express.Router();

router.post('/add', userContactSubmission);
router.get('/get', getUserContacts);

module.exports = router;