const mongoose = require("mongoose");

const kwsSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    displayCO: {
        type: String,
        required: true
    },
    displayCO2: {
        type: String,
        required: true
    },
    showStatusCO: {
        type: String,
        required: true
    },
    showStatusCO2: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    kota: {
        type: String,
        required: true
    },
    kecamatan: {
        type: String,
        required: true
    },
    kelurahan: {
        type: String,
        required: true
    },
    dateTaken: {
        type: String,
        required: true
    },


});

module.exports = new mongoose.model("Particledatakws", kwsSchema);
