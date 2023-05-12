module.exports = (sequelize, DataTypes) => {
  /**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: { allowNull: false, type: DataTypes.STRING },
    email: { allowNull: false, type: DataTypes.STRING },
    password: { allowNull: false, type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  User.associate = ({ BlogPost }) => {
    User.hasMany(BlogPost, {
      as: 'blogPosts',
      foreignKey: 'id'
    });
  };
  return User;
}