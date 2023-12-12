const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`Connection successful`);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = connectDB;