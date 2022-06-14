const router = require('express').Router();


const registroController = require('../controllers/registroController');
router.get('/', registroController.load);
router.post('/save', registroController.save);
module.exports = router;