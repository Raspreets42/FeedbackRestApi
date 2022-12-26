const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose.connect("mongodb+srv://raspreetdb:dbpreetsingh@cluster0.lh13d.mongodb.net/raspreetportfolio?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`Connection successful`);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = connectDB;