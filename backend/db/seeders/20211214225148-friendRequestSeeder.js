'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('FriendRequests', [
      {
        sessionUserId: 1,
        friendId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 1,
        friendId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 1,
        friendId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 1,
        friendId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 1,
        friendId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {


    return queryInterface.bulkDelete('FriendRequests', null, {});

  }
};
