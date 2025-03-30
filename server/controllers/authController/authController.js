const User = require("../../model/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendEmail = require("../../config/nodeMailer");


//Register session

const registerUser = async (req, res) => {

    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
        return res.status(500).json({
            success: false,
            message: 'Invalid Data Provided!'
        })
    }

    try {

        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.status(500).json({
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
        console.log(e);
        res.status(404).json({
            success: false,
            message: 'some error occured!'
        })
    }
}

//Login Session

const loginUser = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(500).json({
            success: false,
            message: 'Invalid Data Provided!'
        })
    }

    try {

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(500).json({
                success: false,
                message: 'User is not exist. Please register first!'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(500).json({
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
        console.log(e);
        res.status(404).json({
            success: false,
            message: 'some error occured!'
        })
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
        console.log(e);
        res.status(404).json({
            success: false,
            message: 'some error occured!'
        })
    }
}


//send verification email to the user's email

const sendVerifyOtp = async (req, res) => {
    try {

        const { userId } = req.body;

        const user = await User.findById(userId);
        if (user.isAccountVerified) {
            return res.status(500).json({
                success: false,
                message: 'Account is Already verified.'
            })
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 60 * 60 * 1000;

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
        console.log(e);
        res.status(404).json({
            success: false,
            message: 'some error occured!'
        })
    }
}

const verifyEmail = async (req, res) => {
    try {

        const { userId, otp } = req.body;

        if (!userId || !otp) {
            return res.status(500).json({
                success: false,
                message: 'Invalid Details Provided'
            })
        }

        const user = await User.findById(userId);

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

        if(user.verifyOtpExpireAt > Date.now()) {
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
        console.log(e);
        res.status(404).json({
            success: false,
            message: 'some error occured!'
        })
    }
}


module.exports = { registerUser, loginUser, logoutUser, sendVerifyOtp, verifyEmail }