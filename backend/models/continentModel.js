const mongoose = require('mongoose')

const continentModel = new mongoose.Schema({
    continent_code: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('continents', continentModel)