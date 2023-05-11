module.exports = (sequelize, DataTypes) => {
  /**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  User.associate = ({ BlogPost }) => {
    User.hasMany(BlogPost, {
      as: 'blog_posts',
      foreignKey: 'userId'
    });
  };
  return User;
}