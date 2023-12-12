const db = require('../models/models');
const Skills = db.skillsDetails;

const skillsController = {};

skillsController.getSkillsInformation = async (req, res) => {
    Skills.find({}).then(data => {
        res.status(200).send({details: data, message: 'Information fetched successfully', stats: 200});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving information.",
            status: 500
        });
    });
}

skillsController.postSkillsInformation = async (req, res) => {
    const {programmingLanguage, technologiesOrFrameworks, tools} = req.body;

    if ((!programmingLanguage || programmingLanguage.length == 0) && (!technologiesOrFrameworks || technologiesOrFrameworks.length == 0) && (!tools || tools.length == 0)) {
        res.status(400).send({message: "Failed! All fields are required !", status: 400});
        return;
    }

    const skillsInfo = new Skills({
        programmingLanguage: programmingLanguage,
        technologiesOrFrameworks: technologiesOrFrameworks,
        tools: tools,
    });
    skillsInfo.save(skillsInfo).then(data => {
        res.status(201).send({details: data, message: 'Skills information inserted successfully', status: 201});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Skills information.",
            status: 500
        });
    });
}

module.exports = skillsController;