const express = require('express');
const router = express.Router();
const subCategoryController = require('../controllers/subcategory.controller');

router.post('/', subCategoryController.create);
router.put('/:id', subCategoryController.update);
router.get('/:id', subCategoryController.findOne);
router.get('/', subCategoryController.findAll);


module.exports = router;
