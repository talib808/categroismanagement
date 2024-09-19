const categoryService = require('../services/category.service');

exports.create = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await categoryService.createCategory(name);
    res.status(201).send(category);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedCategory = await categoryService.updateCategory(id, name);
    res.send(updatedCategory);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categoryService.getCategory(id);
    res.send(category);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const categories = await categoryService.listCategories();
    res.send(categories);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.findAllWithCounts = async (req, res) => {
    try {
        const categories = await categoryService.listCategoriesWithSubCategoryCount();
        console.log(categories);
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


  
