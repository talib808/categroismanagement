const db = require('../models');
const Category = db.Category;

exports.createCategory = async (name) => {
  return Category.create({ name });
};

exports.updateCategory = async (id, name) => {
  return Category.update({ name }, { where: { id } });
};

exports.getCategory = async (id) => {
  return Category.findByPk(id, { include: ['subCategories'] });
};

exports.listCategories = async () => {
  return Category.findAll({ include: ['subCategories'] });
};



exports.listCategoriesWithSubCategoryCount = async () => {
    const categories = await Category.findAll({
        attributes: [
            'name',
            [db.sequelize.fn('COUNT', db.sequelize.col('subCategories.id')), 'subCategoryCount'],
        ],
        include: [{ model: db.SubCategory, as: 'subCategories', attributes: [] }],
        group: ['Category.id'],
    });
    return categories;
};


  