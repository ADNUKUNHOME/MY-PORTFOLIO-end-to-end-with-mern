const Contact = require("../../model/contactModel");



const userContactSubmission = async (req, res) => {
    try {

        const { name, email, subject, message } = req.body;
        if(!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required!'
            })
        }

        const contact = new Contact({
            name,
            email,
            subject,
            message
        });

        await contact.save();

        return res.status(200).json({
            success: true,
            message: 'Your Submission is successful.'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Some Error Occured!'
        })
    }
}

const getUserContacts = async (req, res) => {
    try {

        const contact = await Contact.find();
        if(!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contacts are empty'
            })
        }

        return res.status(200).json({
            success: true,
            data: contact
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Some Error Occured!'
        })
    }
}

module.exports = { userContactSubmission, getUserContacts }