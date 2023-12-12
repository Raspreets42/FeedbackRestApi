const db = require('../models/models');
const Project = db.projectDetails;

const projectController = {};

projectController.getProjectInformation = async (req, res) => {
    Project.find({}).then(data => {
        res.status(200).send({details: data, message: 'Information fetched successfully', stats: 200});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving information.",
            status: 500
        });
    });
}

projectController.postProjectInformation = async (req, res) => {
    const {projectName, projectDescription, projectRole, projectResponsibility, projectSkills, projectGitLink, projectDeployedLink} = req.body;

    if ( !projectName && !projectDescription && !projectRole && !projectResponsibility && (!projectSkills || projectSkills.length == 0) && !projectGitLink && !projectDeployedLink ) {
        res.status(400).send({message: "Failed! All fields are required !", status: 400});
        return;
    }

    const projectInfo = new Project({
        projectName: projectName,
        projectDescription: projectDescription,
        projectRole: projectRole,
        projectResponsibility: projectResponsibility,
        projectSkills: projectSkills,
        projectGitLink: projectGitLink,
        projectDeployedLink: projectDeployedLink,
    });
    projectInfo.save(projectInfo).then(data => {
        res.status(201).send({details: data, message: 'Project information inserted successfully', status: 201});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Project information.",
            status: 500
        });
    });
}

module.exports = projectController;