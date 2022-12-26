const mongoose = require('mongoose');

const uri = "mongodb+srv://raspreetdb:dbpreetsingh@cluster0.lh13d.mongodb.net/raspreetportfolio?retryWrites=true&w=majority";

const connectDB = (uri) => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`Connection successful`);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = connectDB;