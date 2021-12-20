'use strict';
module.exports = (sequelize, DataTypes) => {
  const FriendRequest = sequelize.define('FriendRequest', {
    sessionUserId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER
  }, {});
  FriendRequest.associate = function (models) {
    FriendRequest.belongsTo(models.User, { foreignKey: 'sessionUserId' })
    FriendRequest.belongsTo(models.User, { foreignKey: 'friendId' })

  };
  return FriendRequest;
};