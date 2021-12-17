'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    sessionUserId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER
  }, {});
  Friend.associate = function (models) {
    Friend.belongsTo(models.User, { foreignKey: 'sessionUserId' })
    Friend.belongsTo(models.User, { foreignKey: 'friendId' })

  };
  return Friend;
};