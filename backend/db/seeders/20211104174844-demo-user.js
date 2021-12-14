'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo',
        lastName: 'User',
        email: 'demo@user.io',
        workplace: 'Meta',
        city: 'Spacetown',
        state: 'Mooncrator',
        birthCity: 'Meta',
        birthState: 'Database',
        profileImageUrl: 'https://media.discordapp.net/attachments/920401341472444467/920401355011682314/unknown.png',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920401341472444467/920411110610456606/a-space-cartoon-background-scene-free-vector.png?width=1154&height=686',
        hashedPassword: bcrypt.hashSync('password'),
      },
      // {
      //   email: faker.internet.email(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   email: faker.internet.email(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
