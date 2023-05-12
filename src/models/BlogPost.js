module.exports = (sequelize, DataTypes) => {
  /**
 *
 * @param {import('sequelize')} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * 
 */
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'blog_posts'
  });

  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, {
      as: 'users',
      foreignKey: 'userId',
    })
  };
  return BlogPost;
}