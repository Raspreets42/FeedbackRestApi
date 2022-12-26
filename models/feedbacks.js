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
    Phone : {
        type:String,
        required:true
    },
    Email : {
        type:String,
        required:true
    },
    Age : {
        type:Number,
        required:true,
    },
    Gender : {
        type:String,
        required:true,
    },
    Comments : {
        type:String,
        required:true,
    }
});

const Feedback = mongoose.model("Raspreetdata" , feedbackSchema);

module.exports = Feedback;