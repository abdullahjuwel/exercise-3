const router = require('express').Router();
const countryCtrl = require('../controllers/countryCtrl');


router.post('/list', countryCtrl.countryData);
router.post('/store', countryCtrl.store);

module.exports = router;