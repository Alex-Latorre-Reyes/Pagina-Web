const router = require('express').Router();

const carroController = require('../controllers/carroController');

router.get('/', carroController.list);
router.get('/delete/:us/:pro', carroController.delete);
router.get('/deleteAll', carroController.deleteAll);

module.exports = router;