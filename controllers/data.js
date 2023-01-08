const Feedback = require('../models/feedbacks')

const getHomePage = async (req , res) => {
    res.status(200).json( { homePage : " I am getHomePage" } );
}
const getFeedbackPage = async (req , res) => {
    res.status(200).json( { feedbackPage : " I am getFeedbackPage" } );
}
const postFeedbacks = async (req, res) => {
    try {
        const giveFeedback = new Feedback({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            subject: req.body.subject,
            message: req.body.message
    });
    const received = await giveFeedback.save();
    console.log('data saved');
    res.status(201).json(received);
    } catch (error) {
        console.log('err : ' , error);
        res.status(400).send(error);
    }
}

module.exports = { getHomePage , getFeedbackPage , postFeedbacks };