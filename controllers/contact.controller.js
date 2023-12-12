const db = require('../models/models');

const Contact = db.contact;

const postContact = async (req, res) => {
    const {firstName,lastName,email,subject,message} = req.body;

    if(!firstName, !lastName, !email, !subject, !message){
        res.status(400).send({message: "Failed! All fields are required !", status: 400});
        return;
    }

    const giveContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });
    const received = await giveContact.save();
    try {
    console.log('data saved');
        res.status(201).send({details: received, message: 'Contact information inserted successfully', status: 201});
    } catch (error) {
        console.log('err : ' , error);
        res.status(400).send({
            message: err.message || "Some error occurred while creating the Skills information.",
            status: 500
        });
    }
}

module.exports = { postContact };