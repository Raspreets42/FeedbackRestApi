module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            homeScreenDescription: {type: String, required: true},
            aboutScreenDescription: {type: String, required: true},
            resumeDriveLink: {type: String, required: true},
        },
        {timestamps: true}
    );

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });
    // It defines a custom method called toJSON on the schema. It removes the __v (version) and _id fields and adds an id field with the value of _id.

    const aboutDetails = mongoose.model("aboutDetails", schema);
    return aboutDetails;
};