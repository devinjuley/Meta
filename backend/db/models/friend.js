'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    sessionUserId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER
  }, {});
  Friend.associate = function(models) {
    // associations can be defined here
  };
  return Friend;
};