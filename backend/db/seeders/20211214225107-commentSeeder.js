'use strict';
const faker = require('faker');


module.exports = {
  up: (queryInterface, Sequelize) => {

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    let commentArray = []
    for (let i = 0; i < 225; i++) {
      commentArray.push({
        userId: getRandomInt(1, 21),
        postId: getRandomInt(1, 39),
        content: faker.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('Comments', commentArray, {});
    // {
    //   userId: 1,
    //   postId: 1,
    //   content: 'What the hell is going on here?',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 2,
    //   postId: 2,
    //   content: 'One of the best to ever do it!',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 3,
    //   postId: 3,
    //   content: 'Super cool.',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 4,
    //   postId: 4,
    //   content: 'Damn, he put him downnnnnn!',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 5,
    //   postId: 5,
    //   content: 'Probably start waving my hands and legs around like a crazy person.',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 6,
    //   postId: 6,
    //   content: 'Good one!',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 7,
    //   postId: 7,
    //   content: 'My favorite :D',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 8,
    //   postId: 8,
    //   content: 'Lol thats super cool.',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 9,
    //   postId: 9,
    //   content: 'BloodBourne, maybe?',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 1,
    //   postId: 10,
    //   content: 'No idea, but I love it.',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 2,
    //   postId: 11,
    //   content: 'T_T',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 3,
    //   postId: 12,
    //   content: 'I wish I was there.',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 4,
    //   postId: 13,
    //   content: 'What a classic.',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 5,
    //   postId: 14,
    //   content: '::thinking::',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 6,
    //   postId: 15,
    //   content: 'Never surrender!',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 7,
    //   postId: 16,
    //   content: 'I wish I could make something this cool D:',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 8,
    //   postId: 17,
    //   content: 'He looks at peace.',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 9,
    //   postId: 18,
    //   content: 'Bigggg yeppppppp',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 1,
    //   postId: 19,
    //   content: 'That little adorable blob needs to do the thing!',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 2,
    //   postId: 20,
    //   content: 'Magic Methods',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 3,
    //   postId: 21,
    //   content: 'Ready for a night out on the town!',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 4,
    //   postId: 22,
    //   content: 'Who painted this?',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 5,
    //   postId: 23,
    //   content: 'OH I like this one.',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 6,
    //   postId: 24,
    //   content: 'Never!!!!',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 7,
    //   postId: 25,
    //   content: 'Who knows.',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 8,
    //   postId: 26,
    //   content: 'Thanks for sharing this!',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 9,
    //   postId: 27,
    //   content: 'I wanna go next time!',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },



  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Comments', null, {});

  }
};
