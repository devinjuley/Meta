'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: true,
      },
      workplace: {
        type: Sequelize.STRING(100),
      },
      city: {
        type: Sequelize.STRING(200),
      },
      state: {
        type: Sequelize.STRING(200),
      },
      birthCity: {
        type: Sequelize.STRING(200),
      },
      birthState: {
        type: Sequelize.STRING(200),
      },
      profileImageUrl: {
        type: Sequelize.STRING(3000),
      },
      backgroundImageUrl: {
        type: Sequelize.STRING(3000),
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
