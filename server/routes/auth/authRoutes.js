const express = require('express');
const { registerUser, loginUser, logoutUser, sendVerifyOtp, verifyEmail, isAuthenticated, resetPasswordOtp, passwordReset } = require('../../controllers/authController/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/send-verify-otp', sendVerifyOtp);
router.post('/verify-account', verifyEmail);
router.post('/send-reset-password', resetPasswordOtp);
router.post('/reset-password', passwordReset);
router.get('/is-auth', isAuthenticated, (req, res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        message: 'Authenticated User',
        user
    })
});

module.exports = router;