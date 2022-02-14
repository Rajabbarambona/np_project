const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Slide = new Schema({
    img: {
        type: String,
        required: true,
    },
    header: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
    },
});

module.exports = mongoose.model("Slide", Slide);