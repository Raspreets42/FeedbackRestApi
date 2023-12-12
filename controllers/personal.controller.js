const db = require('../models/models');
const Personal = db.personalDetails;

const personalController = {}

personalController.getPersonalInformation = async (req, res) => {
    Personal.find({}).then(data => {
        res.status(200).send({details: data, message: 'Information fetched successfully', stats: 200});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving information.",
            status: 500
        });
    });
}

personalController.postPersonalInformation = async (req, res) => {
    const {
        name,
        email,
        mobile,
        linkedin,
        github,
        leetcode,
        currentDesignation,
        currentRole,
        currentOrganization,
        currentLocation,
        experience,
        homeLocation
    } = req.body;

    if (!name && !email && !mobile && !linkedin && !github && !leetcode && !currentDesignation && !currentRole && !currentOrganization && !currentLocation && !experience && !homeLocation) {
        res.status(400).send({message: "Failed! All fields are required !", status: 400});
        return;
    }

    const personalInfo = new Personal({
        name: name,
        email: email,
        mobile: mobile,
        linkedin: linkedin,
        github: github,
        leetcode: leetcode,
        currentDesignation: currentDesignation,
        currentRole: currentRole,
        currentOrganization: currentOrganization,
        currentLocation: currentLocation,
        experience: experience,
        homeLocation: homeLocation
    });
    personalInfo.save(personalInfo).then(data => {
        res.status(201).send({details: data, message: 'personal information inserted successfully', status: 201});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the personal information.",
            status: 500
        });
    });
}

module.exports = personalController;