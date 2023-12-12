const express = require('express');
const router = express.Router();

const personalController = require('../controllers/personal.controller')
const aboutController = require('../controllers/about.controller')
const educationController = require('../controllers/education.controller')
const workController = require('../controllers/work.controller')
const skillsController = require('../controllers/skills.controller')
const projectController = require('../controllers/project.controller')
const { postContact } = require('../controllers/contact.controller')

router.get('/', (req , res) => {
    res.status(200).json( { homePage : " I am getHomePage" } );
});

router.get('/getPersonalInformation', personalController.getPersonalInformation);
router.post('/postPersonalInformation', personalController.postPersonalInformation);

router.get('/getAboutInformation', aboutController.getAboutInformation);
router.post('/postAboutInformation', aboutController.postAboutInformation);

router.get('/getEducationInformation', educationController.getEducationInformation);
router.post('/postEducationInformation', educationController.postEducationInformation);

router.get('/getWorkInformation', workController.getWorkInformation);
router.post('/postWorkInformation', workController.postWorkInformation);

router.get('/getSkillsInformation', skillsController.getSkillsInformation);
router.post('/postSkillsInformation', skillsController.postSkillsInformation);

router.get('/getProjectInformation', projectController.getProjectInformation);
router.post('/postProjectInformation', projectController.postProjectInformation);

router.post('/submitContact', postContact );

module.exports = router;