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
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920449144823353354/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-to-picture-id1034357476.png',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920401341472444467/920411110610456606/a-space-cartoon-background-scene-free-vector.png?width=1154&height=686',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jim',
        lastName: 'Tack',
        email: 'tom@tom.com',
        workplace: 'Google',
        city: 'San Francisco',
        state: 'California',
        birthCity: 'Saint Louis',
        birthState: 'Missouri',
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920449276851675136/CaseyDeidrickheadshotbyMarcCartwright.png?width=457&height=686',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920457288614035516/976973.png?width=1098&height=686',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Azad',
        lastName: 'Patel',
        email: 'azad@azad.com',
        workplace: 'Amazon',
        city: 'Las Cruces',
        state: 'New Mexico',
        birthCity: 'Phoenix',
        birthState: 'Arizona',
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920449351652876298/portrait-of-young-happy-indian-business-man-executive-looking-at-picture-id1309489745.png',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920457416007643186/2-pigeons_plaza_hotel.png',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Damon',
        lastName: 'Jackson',
        email: 'damon@damon.com',
        workplace: 'Netflix',
        city: 'New York',
        state: 'New York',
        birthCity: 'Newark',
        birthState: 'New York',
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920449407588118548/afro.png',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920457486639714304/3-poets_walk_central_park.png',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'James',
        lastName: 'Thomas',
        email: 'james@james.com',
        workplace: 'Facebook',
        city: 'Los Angeles',
        state: 'California',
        birthCity: 'Seattle',
        birthState: 'Washington',
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920449702917468190/top-headshots-los-angeles-good-headshot-photographer-near-me-headshots-la-sergio-garcia-headshots-175-scaled.png?width=458&height=686',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920457656026664960/nature-3082832__480.png',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Brittany',
        lastName: 'Larson',
        email: 'brittany@brittany.com',
        workplace: 'Microsoft',
        city: 'Fort Worth',
        state: 'Texas',
        birthCity: 'Austin',
        birthState: 'Texas',
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920453368827219968/6513f4ac2a3865b2320c7eddbd2ed797.png',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920457376182730762/iStock-641093712-min-1.png',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Sophia',
        lastName: 'Russo',
        email: 'sophia@sophia.com',
        workplace: 'Hulu',
        city: 'Portland',
        state: 'Oregon',
        birthCity: 'Eugene',
        birthState: 'Oregon',
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920453574943727636/Best-Selfie-Poses-For-Girls-To-Look-Super-Cute-9-1.png',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920457756236996638/iStock-681902904-min.png?width=1246&height=686',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Rosa',
        lastName: 'Garcia',
        email: 'rosa@rosa.com',
        workplace: 'Instagram',
        city: 'Jacksonville',
        state: 'Florida',
        birthCity: 'Tampa',
        birthState: 'Florida',
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920453683085443072/main-qimg-25eb8f0aca7ab75efa2b928452e822b5-pjlq.png',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920457889318047845/iStock-610863516-min.png?width=915&height=686',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Lisa',
        lastName: 'Williams',
        email: 'lisa@lisa.com',
        workplace: 'Tumblr',
        city: 'Sacramento',
        state: 'California',
        birthCity: 'Pittsburgh',
        birthState: 'Pennsylvania',
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920454030398984262/360_F_319821400_qPasGZ3OQHYdCmYHvx5m4ZYvyegl7LZn.png',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920457999099777054/photo-1549088521-94b6502fec3d.png',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    // const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});
  }
};
