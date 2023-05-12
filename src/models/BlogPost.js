module.exports = (sequelize, DataTypes) => {
  /**
 *
 * @param {import('sequelize')} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * 
 */
  const BlogPost = sequelize.define('BlogPost', {
    id: { allowNull: false, type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { allowNull: false, type: DataTypes.STRING },
    content: { allowNull: false, type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER },
    published: { allowNull: false, type: DataTypes.DATE },
    updated: { allowNull: false, type: DataTypes.DATE },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'blog_posts'
  });

  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, {
      as: 'user',
      foreignKey: 'userId',
    })
  };
  return BlogPost;
}