const router = require('express').Router();


const contactoController = require('../controllers/contactoController');
router.get('/', contactoController.load);
router.get('/respuesta', contactoController.response);
router.get('/out', contactoController.out);
router.post('/save', contactoController.save)
module.exports = router;