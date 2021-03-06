'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');


module.exports = {
  up: (queryInterface, Sequelize) => {
    // const usersArr = [
    //   {
    //     firstName: 'Demo',
    //     lastName: 'User',
    //     email: 'demo@user.io',
    //     workplace: 'Meta',
    //     city: 'Spacetown',
    //     state: 'Mooncrator',
    //     birthCity: 'Meta',
    //     birthState: 'Database',
    //     profileImageUrl: 'https://media.discordapp.net/attachments/920401341472444467/920401355011682314/unknown.png',
    //     backgroundImageUrl: 'https://media.discordapp.net/attachments/920401341472444467/920411110610456606/a-space-cartoon-background-scene-free-vector.png?width=1154&height=686',
    //     hashedPassword: bcrypt.hashSync('password'),
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }
    // ]

    // for (let i = 0; i < 20; i++) {

    //   usersArr.push({
    //     firstName: user.get_firstname,
    //     lastName: user.get_lastname,
    //     email: user.email,
    //     // workplace: faker.company.companyName(),
    //     // city: faker.address.city(),
    //     // state: faker.address.state(),
    //     // birthCity: faker.address.city(),
    //     // birthState: faker.address.state(),
    //     // profileImageUrl: faker.image.imageUrl(),
    //     // backgroundImageUrl: faker.image.imageUrl(),
    //     hashedPassword: bcrypt.hashSync('Password#11'),
    //     createdAt: new Date(),
    //     updatedAt: new Date()

    //   })
    //   console.log(user)
    // }




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
        hashedPassword: bcrypt.hashSync('Password#11'),
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
        hashedPassword: bcrypt.hashSync('Password#11'),
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
        hashedPassword: bcrypt.hashSync('Password#11'),
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
        hashedPassword: bcrypt.hashSync('Password#11'),
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
        hashedPassword: bcrypt.hashSync('Password#11'),
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
        hashedPassword: bcrypt.hashSync('Password#11'),
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
        hashedPassword: bcrypt.hashSync('Password#11'),
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
        hashedPassword: bcrypt.hashSync('Password#11'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Timmy',
        lastName: 'Lopez',
        email: 'timmy@timmy.com',
        workplace: 'GitHub',
        city: 'Sacramento',
        state: 'California',
        birthCity: 'Pittsburgh',
        birthState: 'Pennsylvania',
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/920449471224090684/00-male-beard-actor-headshots-denver.png?width=569&height=569',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925135953687887972/soldier_helmet_art_123765_300x168.png',
        hashedPassword: bcrypt.hashSync('Password#11'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: 'user1@user.com',
        workplace: faker.company.companyName(),
        city: faker.address.city(),
        state: faker.address.state(),
        birthCity: faker.address.city(),
        birthState: faker.address.state(),
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925248557261389894/37cd4ae9239b20dfd0f7f1e80194b344.png',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925250106758938644/kanyewestjayz.png?width=855&height=569',
        hashedPassword: bcrypt.hashSync('Password#11'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: 'user2@user.com',
        workplace: faker.company.companyName(),
        city: faker.address.city(),
        state: faker.address.state(),
        birthCity: faker.address.city(),
        birthState: faker.address.state(),
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925248641604649011/df3fd4c47c006b594c458d736003ec8c.png?width=427&height=569',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925251383614144512/nightwalk12x_xthumb.png',
        hashedPassword: bcrypt.hashSync('Password#11'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: 'user3@user.com',
        workplace: faker.company.companyName(),
        city: faker.address.city(),
        state: faker.address.state(),
        birthCity: faker.address.city(),
        birthState: faker.address.state(),
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925248669815541800/68fefbe81ce2c54bb810675aaba52833.png?width=320&height=568',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925250143803043880/red-faced-sun-600x400.png',
        hashedPassword: bcrypt.hashSync('Password#11'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: 'user4@user.com',
        workplace: faker.company.companyName(),
        city: faker.address.city(),
        state: faker.address.state(),
        birthCity: faker.address.city(),
        birthState: faker.address.state(),
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925248700907929660/Facetune-2-550x550.png',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925250296614101022/2998685-ultra-wide-photography-japan___mixed-wallpapers.png?width=1080&height=456',
        hashedPassword: bcrypt.hashSync('Password#11'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: 'user5@user.com',
        workplace: faker.company.companyName(),
        city: faker.address.city(),
        state: faker.address.state(),
        birthCity: faker.address.city(),
        birthState: faker.address.state(),
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925248944324362260/Ddht3W9V0AEyeZc.png?width=427&height=569',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925250424729124894/433378-ultra-wide-cyberpunk.png?width=1080&height=456',
        hashedPassword: bcrypt.hashSync('Password#11'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: 'user6@user.com',
        workplace: faker.company.companyName(),
        city: faker.address.city(),
        state: faker.address.state(),
        birthCity: faker.address.city(),
        birthState: faker.address.state(),
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925249062318522388/man-selfie-in-the-car-picture-id1250295851.png?width=428&height=569',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925250485152272414/photo-1542224083-5e422c44d81a.png?width=910&height=569',
        hashedPassword: bcrypt.hashSync('Password#11'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: 'user7@user.com',
        workplace: faker.company.companyName(),
        city: faker.address.city(),
        state: faker.address.state(),
        birthCity: faker.address.city(),
        birthState: faker.address.state(),
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925249199908483192/202128076.png?width=427&height=569',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925250512939548692/how-to-enhance-a-photo-gorizon-before.png?width=855&height=569',
        hashedPassword: bcrypt.hashSync('Password#11'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: 'user8@user.com',
        workplace: faker.company.companyName(),
        city: faker.address.city(),
        state: faker.address.state(),
        birthCity: faker.address.city(),
        birthState: faker.address.state(),
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925249268061716480/49E550FC00000578-5463185-image-a-108_1520280976331.png?width=483&height=569',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925250608703885343/photo-1498205470373-545d7bebbfa1.png?width=853&height=569',
        hashedPassword: bcrypt.hashSync('Password#11'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: 'user9@user.com',
        workplace: faker.company.companyName(),
        city: faker.address.city(),
        state: faker.address.state(),
        birthCity: faker.address.city(),
        birthState: faker.address.state(),
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925249303222550538/depositphotos_215913036-stock-photo-portrait-happy-adult-man-30s.png',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925250817802506300/4588513-colorful-photography-water-reflection-puddle-bokeh-pavements-ground.png?width=910&height=569',
        hashedPassword: bcrypt.hashSync('Password#11'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: 'user10@user.com',
        workplace: faker.company.companyName(),
        city: faker.address.city(),
        state: faker.address.state(),
        birthCity: faker.address.city(),
        birthState: faker.address.state(),
        profileImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925249433862561802/smiling-man-in-the-living-room-is-taking-a-selfie-picture-id813935198.png',
        backgroundImageUrl: 'https://media.discordapp.net/attachments/920421183860641792/925251471157657600/77-773830_s.png?width=1080&height=304',
        hashedPassword: bcrypt.hashSync('Password#11'),
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
