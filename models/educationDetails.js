module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            courseName: {type: String, required: true},
            schoolOrCollege: {type: String, required: true},
            schoolCollegeName: {type: String, required: true},
            boardUniversityName: {type: String, required: true},
            percentage: {type: String, required: true},
            timePeriod: {type: String, required: true},
        },
        {timestamps: true}
    );

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });
    // It defines a custom method called toJSON on the schema. It removes the __v (version) and _id fields and adds an id field with the value of _id.

    const educationDetails = mongoose.model("educationDetails", schema);
    return educationDetails;
};