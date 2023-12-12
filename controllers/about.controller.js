const db = require('../models/models');
const About = db.aboutDetails;

const aboutController = {};

aboutController.getAboutInformation = async (req, res) => {
    About.find({}).then(data => {
        res.status(200).send({details: data, message: 'Information fetched successfully', stats: 200});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving information.",
            status: 500
        });
    });
}

aboutController.postAboutInformation = async (req, res) => {
    const {homeScreenDescription, aboutScreenDescription, resumeDriveLink} = req.body;

    if (!homeScreenDescription && !aboutScreenDescription && !resumeDriveLink) {
        res.status(400).send({message: "Failed! All fields are required !", status: 400});
        return;
    }

    const aboutInfo = new About({
        homeScreenDescription: homeScreenDescription,
        aboutScreenDescription: aboutScreenDescription,
        resumeDriveLink: resumeDriveLink,
    });
    aboutInfo.save(aboutInfo).then(data => {
        res.status(201).send({details: data, message: 'About information inserted successfully', status: 201});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the About information.",
            status: 500
        });
    });
}

module.exports = aboutController;