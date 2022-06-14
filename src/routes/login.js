const router = require('express').Router();


const loginController = require('../controllers/loginController');
router.get('/', loginController.load);
router.post('/enter', loginController.enter);

module.exports = router;