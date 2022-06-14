const router = require('express').Router();


const productoController = require('../controllers/productoController');
router.get('/', productoController.load);
router.post('/save', productoController.save);
router.get('/out', productoController.out);
module.exports = router;