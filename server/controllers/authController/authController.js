const User = require("../../model/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendEmail = require("../../config/nodeMailer");


//Register session

const registerUser = async (req, res) => {

    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Invalid Data Provided!'
        })
    }

    try {

        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.status(400).json({
                success: false,
                message: 'User is already exist with same email id. Please Login!'
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            userName,
            email,
            password: hashPassword
        })

        await newUser.save();

        //Sending Welcome email
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'welcome to Brazlow porfolio',
            text: `Welcome to Brazlow porfolio website. Your Account has been created with the email id: ${email}`
        }
        await sendEmail(mailOptions);

        res.status(200).json({
            success: true,
            data: newUser,
        })

    } catch (e) {
        console.error("Error in loginUser:", e);
        res.status(500).json({
            success: false,
            message: e.message || 'Internal Server Error'
        });
    }
}

//Login Session

const loginUser = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Invalid Data Provided!'
        })
    }

    try {

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User is not exist. Please register first!'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Password is incorrect!'
            })
        }

        const token = jwt.sign({ id: user._id, email: user.email, userName: user.userName }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie('token', token, {
            httpOnly: true,
            sucure: false,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        })

        res.status(200).json({
            success: true,
            message: 'Logged in successfully!',
            token,
            user: {
                email: user.email,
                userName: user.userName,
                id: user._id
            }
        })

    } catch (e) {
        console.error("Error in loginUser:", e);
        res.status(500).json({
            success: false,
            message: e.message || 'Internal Server Error'
        });
    }
}


//Logout Session

const logoutUser = async (req, res) => {
    try {
        res.clearCookie('token').json({
            success: true,
            message: 'Logged Out SuccessFully!'
        })
    } catch (e) {
        console.error("Error in logoutUser:", e);
        res.status(500).json({
            success: false,
            message: e.message || 'Internal Server Error'
        });
    }
}


//send verification email to the user's email

const sendVerifyOtp = async (req, res) => {
    try {

        const { email } = req.body;

        const user = await User.findOne({email});
        if(!user) {
            return res.status(500).json({
                success: false,
                message: 'User is not Exist! Please try again.'
            })
        }
        if (user.isAccountVerified) {
            return res.status(500).json({
                success: false,
                message: 'Account is Already verified.'
            })
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000;

        await user.save();

        //Sending Verificarion OTP
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Account Verification OTP',
            text: `Your OTP is ${otp}. Verify your account with this OTP`
        }
        await sendEmail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Verification OTP sent on Email'
        })


    } catch (e) {
        console.error("Error in loginUser:", e);
        res.status(500).json({
            success: false,
            message: e.message || 'Internal Server Error'
        });
    }
}

const verifyEmail = async (req, res) => {
    try {

        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(500).json({
                success: false,
                message: 'Invalid Details Provided'
            })
        }

        const user = await User.findOne({email});

        if(!user) {
            return res.status(500).json({
                success: false,
                message: 'User is not exist!'
            })
        }

        if(user.verifyOtp === '' || user.verifyOtp !== otp) {
            return res.status(500).json({
                success: false,
                message: 'Invalid OTP provided!'
            })
        }

        if(user.verifyOtpExpireAt < Date.now()) {
            return res.status(500).json({
                success: false,
                message: 'OTP expired!'
            })
        }

        user.isAccountVerified = true;
        user.verifyOtp = '';
        user.verifyOtpExpireAt = 0;

        await user.save();

        return res.status(200).json({
            success: true,
            message: 'Email Verified Successfully'
        })

    } catch (e) {
        console.error("Error in verifyEmail:", e);
        res.status(500).json({
            success: false,
            message: e.message || 'Internal Server Error'
        });
    }
}


const isAuthenticated = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'User is authenticated!'
        })
    } catch (e) {
        console.error("Error in loginUser:", e);
        res.status(500).json({
            success: false,
            message: e.message || 'Internal Server Error'
        });
    }
}


//Endpoind for password reset

const resetPasswordOtp  = async (req, res) => {    
    const {email} = req.body;
    if(!email) {
        return  res.status(400).json({
            success: false,
            message: 'Email id is required'
        })
    }

    try {

        const user = await User.findOne({email});
        if(!user) {
            return  res.status(400).json({
                success: false,
                message: 'User is not Exist! Please Enter a valid Email Address'
            })
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000;

        await user.save();

        //Sending Verificarion OTP
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Password reset OTP',
            text: `Your OTP is ${otp}. Reset Your password with this OTP`
        }
        await sendEmail(mailOptions);

        return  res.status(200).json({
            success: true,
            message: 'OTP sent to the email id'
        }) 
        
    } catch (e) {
        console.error("Error in reset otp:", e);
        res.status(500).json({
            success: false,
            message: e.message || 'Internal Server Error'
        });
    }
}

const passwordReset = async (req, res) => {

    const {email, otp, newPassword} = req.body;
    if(!email || !otp || !newPassword) {
        return res.status(400).json({
            success: false,
            message: 'Invalid data Provided!'
        })
    }

    try {
        const user = await User.findOne({email});
        if(!user) {
            return  res.status(400).json({
                success: false,
                message: 'User is not Exist! Please Enter a valid Email Address'
            })
        }

        if(user.resetOtp === '' || user.resetOtp !== otp) {
            return  res.status(400).json({
                success: false,
                message: 'Incorrect  OTP provided'
            })
        }

        
        if(user.resetOtpExpireAt < Date.now()) {
            return res.status(400).json({
                success: false,
                message: 'OTP expired!'
            })
        }

        const hashedPassword = await bcrypt.hash(newPassword,10);

        user.password = hashedPassword;
        user.resetOtp = '';
        user.resetOtpExpireAt = 0;

        await user.save();

        return res.status(200).json({
            success: true,
            message: 'Password has been reset Successfully'
        })

    } catch (e) {
        console.error("Error in resetPassword:", e);
        res.status(500).json({
            success: false,
            message: e.message || 'Internal Server Error'
        });
    }
}


module.exports = { registerUser, loginUser, logoutUser, sendVerifyOtp, verifyEmail, isAuthenticated, resetPasswordOtp, passwordReset }