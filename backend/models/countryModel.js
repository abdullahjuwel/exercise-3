const mongoose = require('mongoose')

const countryModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    flag: {
        type: String,
        required: true,
    },
    languages: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('countries', countryModel)