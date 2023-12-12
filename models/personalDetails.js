module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: {type: String, required: true},
            email: {type: String, required: true},
            mobile: {type: String, required: true},
            linkedin: {type: String, required: true},
            github: {type: String, required: true},
            leetcode: {type: String, required: true},
            currentDesignation: {type: String, required: true},
            currentRole: {type: String, required: true},
            currentOrganization: {type: String, required: true},
            currentLocation: {type: String, required: true},
            experience: {type: String, required: true},
            homeLocation: {type: String, required: true},
        },
        {timestamps: true}
    );

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });
    // It defines a custom method called toJSON on the schema. It removes the __v (version) and _id fields and adds an id field with the value of _id.

    const personalDetails = mongoose.model("personalDetails", schema);
    return personalDetails;
};