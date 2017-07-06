var express = require('express');
var router = express.Router();
var foodController = require('../../controllers/foodController');

router.get('/', foodController.getAll);
router.get('/:id', foodController.getSingle);
router.post('/', foodController.createFood);
router.delete('/:id', foodController.deleteFood);
router.put('/:id', foodController.updateFood);

module.exports = router;
