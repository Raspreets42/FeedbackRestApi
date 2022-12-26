const express = require('express');
const router = express.Router();

const {getHomePage , getFeedbackPage , postFeedbacks } = require('../controllers/data')

router.route("/").get(getHomePage);
router.route("/feedback").get(getFeedbackPage);
// router.route("/feedbacks").post(getFeedbackPage);


router.route('/submitFeedback').post( postFeedbacks );

module.exports = router;