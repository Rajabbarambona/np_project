const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PackageList = new Schema({
    img: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    features: {
        type: String,
    },
    usd: {
        type: String,
    },
});

module.exports = mongoose.model("PackageList", PackageList);