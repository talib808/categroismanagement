const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

router.post('/', categoryController.create);
router.put('/:id', categoryController.update);
router.get('/:id', categoryController.findOne);
router.get('/', categoryController.findAll);
router.get('/categories/count', categoryController.findAllWithCounts);

module.exports = router;
