const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.personalDetails = require('./personalDetails')(mongoose);
db.aboutDetails = require('./aboutDetails')(mongoose);
db.educationDetails = require('./educationDetails')(mongoose);
db.workDetails = require('./workDetails')(mongoose);
db.skillsDetails = require('./skillsDetails')(mongoose);
db.projectDetails = require('./projectDetails')(mongoose);
db.contact = require('./contact')(mongoose);

module.exports = db;