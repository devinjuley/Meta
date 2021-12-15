'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('FriendRequests', [
      {
        sessionUserId: 9,
        friendId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {


    return queryInterface.bulkDelete('FriendRequests', null, {});

  }
};
