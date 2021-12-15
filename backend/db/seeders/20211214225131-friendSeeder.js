'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert('Friends', [
      {
        sessionUserId: 1,
        friendId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 1,
        friendId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 2,
        friendId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 4,
        friendId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 4,
        friendId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 3,
        friendId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 6,
        friendId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 6,
        friendId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 6,
        friendId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 7,
        friendId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 7,
        friendId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 7,
        friendId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 8,
        friendId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 8,
        friendId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sessionUserId: 9,
        friendId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Friends', null, {});

  }
};
