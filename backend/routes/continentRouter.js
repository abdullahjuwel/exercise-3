const router = require('express').Router();
const continentCtrl = require('../controllers/continentCtrl');


router.get('/list', continentCtrl.continentData);
router.post('/store', continentCtrl.store);

module.exports = router;