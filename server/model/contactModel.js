const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
}, { timestamps: true });

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;