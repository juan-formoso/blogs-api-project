module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory',
    {},
    { timestamps: false, tablename: 'PostsCategories' });

    PostsCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostsCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blogPosts',
        through: PostsCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
  };

  return PostsCategory;
};
