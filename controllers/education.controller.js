const db = require('../models/models');
const Education = db.educationDetails;

const educationController = {};

educationController.getEducationInformation = async (req, res) => {
    Education.find({}).then(data => {
        res.status(200).send({details: data, message: 'Information fetched successfully', stats: 200});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving information.",
            status: 500
        });
    });
}

educationController.postEducationInformation = async (req, res) => {
    const {courseName, schoolOrCollege, schoolCollegeName, boardUniversityName, percentage, timePeriod} = req.body;

    if (!courseName && !schoolOrCollege && !schoolCollegeName && !boardUniversityName && !percentage && !timePeriod) {
        res.status(400).send({message: "Failed! All fields are required !", status: 400});
        return;
    }

    const educationInfo = new Education({
        courseName: courseName,
        schoolOrCollege: schoolOrCollege,
        schoolCollegeName: schoolCollegeName,
        boardUniversityName: boardUniversityName,
        percentage: percentage,
        timePeriod: timePeriod,
    });
    educationInfo.save(educationInfo).then(data => {
        res.status(201).send({details: data, message: 'Education information inserted successfully', status: 201});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Education information.",
            status: 500
        });
    });
}

module.exports = educationController;