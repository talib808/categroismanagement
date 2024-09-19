const subCategoryService = require('../services/subcategory.service');

exports.create = async (req, res) => {
  const { name, categoryId } = req.body;
  try {
    const subCategory = await subCategoryService.createSubCategory(name, categoryId);
    res.status(201).send(subCategory);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedSubCategory = await subCategoryService.updateSubCategory(id, name);
    res.send(updatedSubCategory);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const subCategory = await subCategoryService.getSubCategory(id);
    res.send(subCategory);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const subCategories = await subCategoryService.listSubCategories();
    res.send(subCategories);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
