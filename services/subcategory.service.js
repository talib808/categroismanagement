const db = require('../models');
const SubCategory = db.SubCategory;

exports.createSubCategory = async (name, categoryId) => {
  return SubCategory.create({ name, categoryId });
};

exports.updateSubCategory = async (id, name) => {
  return SubCategory.update({ name }, { where: { id } });
};

exports.getSubCategory = async (id) => {
  return SubCategory.findByPk(id, { include: ['category'] });
};

exports.listSubCategories = async () => {
  return SubCategory.findAll({ include: ['category'] });
};
