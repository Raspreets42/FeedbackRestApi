module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            designation: {type: String, required: true},
            organization: {type: String, required: true},
            skills: {type: [String], required: true},
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

    const workDetails = mongoose.model("workDetails", schema);
    return workDetails;
};