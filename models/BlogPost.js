module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };
  return BlogPost;
}; 
