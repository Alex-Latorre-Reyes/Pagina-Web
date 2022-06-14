const router = require('express').Router();

const indexController = require('../controllers/indexController');


router.get('/', indexController.load);
router.get('/out', indexController.out);


module.exports = router;