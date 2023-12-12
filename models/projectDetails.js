module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            projectName: {type: String, required: true},
            projectDescription: {type: String, required: true},
            projectRole: {type: String, required: true},
            projectResponsibility: {type: String, required: true},
            projectSkills: {type: [String], required: true},
            projectGitLink: {type: String},
            projectDeployedLink: {type: String},
        },
        {timestamps: true}
    );

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });
    // It defines a custom method called toJSON on the schema. It removes the __v (version) and _id fields and adds an id field with the value of _id.

    const projectDetails = mongoose.model("projectDetails", schema);
    return projectDetails;
};