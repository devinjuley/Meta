'use strict';
module.exports = (sequelize, DataTypes) => {
  const FriendRequest = sequelize.define('FriendRequest', {
    sessionUserId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER
  }, {});
  FriendRequest.associate = function(models) {
    // associations can be defined here
  };
  return FriendRequest;
};