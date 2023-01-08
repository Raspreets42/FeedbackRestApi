const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    FirstName : {
        type:String,
        required:true
    },
    LastName : {
        type:String,
        required:true
    },
    subject : {
        type:String,
        required:true
    },
    message : {
        type:String,
        required:true,
    }
});

const Feedback = mongoose.model("Raspreetdata" , feedbackSchema);

module.exports = Feedback;