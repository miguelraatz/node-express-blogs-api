module.exports = (sequelize, DataTypes) => {
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
  const PostCategory = sequelize.define('PostCategory',
  {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'blogPosts',
        key: 'id',
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
  },
  {
    underscored: true,
    tableName: 'posts_categories',
    timestamps: false,
  });
  
  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    Category.belongsToMany(BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }
  return PostCategory;
};