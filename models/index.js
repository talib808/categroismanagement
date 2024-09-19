const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.js'); 

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.Category = require('./category.model.js')(sequelize, Sequelize);
db.SubCategory = require('./subcategory.model.js')(sequelize, Sequelize);

db.Category.hasMany(db.SubCategory, { as: 'subCategories' });
db.SubCategory.belongsTo(db.Category, { foreignKey: 'categoryId', as: 'category' });

module.exports = db;
