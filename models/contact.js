module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            firstName: {type: String, required: true},
            lastName: {type: String, required: true},
            email: {type: String, required: true},
            subject: {type: String, required: true},
            message: {type: String, required: true}
        },
        {timestamps: true}
    );
    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const aboutDetails = mongoose.model("contactDetails" , schema);
    return aboutDetails;
}