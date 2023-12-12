const db = require('../models/models');
const Work = db.workDetails;

const workController = {};

workController.getWorkInformation = async (req, res) => {
    Work.find({}).then(data => {
        res.status(200).send({details: data, message: 'Information fetched successfully', stats: 200});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving information.",
            status: 500
        });
    });
}

workController.postWorkInformation = async (req, res) => {
    const {designation, organization, skills, timePeriod} = req.body;

    if (!designation && !organization && !skills && !timePeriod) {
        res.status(400).send({message: "Failed! All fields are required !", status: 400});
        return;
    }

    const workInfo = new Work({
        designation: designation,
        organization: organization,
        skills: skills,
        timePeriod: timePeriod,
    });
    workInfo.save(workInfo).then(data => {
        res.status(201).send({details: data, message: 'Work information inserted successfully', status: 201});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Work information.",
            status: 500
        });
    });
}

module.exports = workController;