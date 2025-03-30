const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    verifyOtp: {type: String, default: ''},
    verifyOtpExpireAt: {type: Number, default: 0},
    isAccountVerified: {type: Boolean, default: false},
    resetOtp: {type: String, default: ''},
    resetOtpExpireAt: {type: Number, default: 0},
})


const User = mongoose.model('User', UserSchema);
module.exports = User;