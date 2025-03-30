const express = require('express');
const { registerUser, loginUser, logoutUser, sendVerifyOtp, verifyEmail } = require('../../controllers/authController/authController');
const userAuth = require('../../middleware/userAuth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/send-verify-otp', userAuth, sendVerifyOtp);
router.post('/verify-account', userAuth, verifyEmail);

module.exports  = router;