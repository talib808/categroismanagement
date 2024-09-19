module.exports = (sequelize, DataTypes) => {
    const SubCategory = sequelize.define('SubCategory', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Categories',
                key: 'id',
            },
        },
    });

    SubCategory.associate = (models) => {
        SubCategory.belongsTo(models.Category, {
            foreignKey: 'categoryId',
            as: 'category',
        });
    };

    return SubCategory;
};
