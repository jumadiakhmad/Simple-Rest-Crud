var express = require('express');
var router = express.Router();
var restaurantController = require('../../controllers/restaurantController');

router.get('/', restaurantController.getAll);
router.get('/:id', restaurantController.getSingle);
router.post('/', restaurantController.createRestaurant);
router.put('/:id', restaurantController.updateRestaurant);
router.delete('/:id', restaurantController.deleteRestaurant);

module.exports = router;
