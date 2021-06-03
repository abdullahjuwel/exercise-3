const Continents = require('../models/continentModel');

const continentCtrl = {
    continentData: async(req, res) => {
        res.json('country list')
    },
    store: async(req, res) => {
        const { continent_code, country } = req.body;
        const data = new Continents({
            continent_code,
            country
        })
        await data.save();
        res.json('saved continent data');
    },
}

module.exports = continentCtrl;