const Countries = require('../models/countryModel');

const countryCtrl = {
    countryData: async(req, res) => {
        const { code } = req.body;
        const data = await Countries.find().where('code', code);
        res.json(data);
    },
    store: async(req, res) => {
        const { name, code, currency, flag, languages } = req.body;
        const data = new Countries({
            name,
            code,
            currency,
            flag,
            languages
        })
        await data.save();
        res.json('saved country data');
    },
}

module.exports = countryCtrl;