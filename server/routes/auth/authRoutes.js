const express = require('express');
const { registerUser, loginUser, logoutUser, sendVerifyOtp, verifyEmail, isAuthenticated, resetPasswordOtp, passwordReset } = require('../../controllers/authController/authController');
const userAuth = require('../../middleware/userAuth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/send-verify-otp', userAuth, sendVerifyOtp);
router.post('/verify-account', userAuth, verifyEmail);
router.post('/is-auth', userAuth, isAuthenticated);
router.post('/send-reset-password', resetPasswordOtp);
router.post('/reset-password', passwordReset);

module.exports  = router;