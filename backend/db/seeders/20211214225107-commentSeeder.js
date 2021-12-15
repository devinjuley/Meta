'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        postId: 1,
        content: 'What the hell is going on here?',
      },
      {
        userId: 2,
        postId: 2,
        content: 'One of the best to ever do it!',
      },
      {
        userId: 3,
        postId: 3,
        content: 'Super cool.',
      },
      {
        userId: 4,
        postId: 4,
        content: 'Damn, he put him downnnnnn!',
      },
      {
        userId: 5,
        postId: 5,
        content: 'Probably start waving my hands and legs around like a crazy person.',
      },
      {
        userId: 6,
        postId: 6,
        content: 'Good one!',
      },
      {
        userId: 7,
        postId: 7,
        content: 'My favorite :D',
      },
      {
        userId: 8,
        postId: 8,
        content: 'Lol thats super cool.',
      },
      {
        userId: 9,
        postId: 9,
        content: 'BloodBourne, maybe?',
      },
      {
        userId: 1,
        postId: 10,
        content: 'No idea, but I love it.',
      },
      {
        userId: 2,
        postId: 11,
        content: 'T_T',
      },
      {
        userId: 3,
        postId: 12,
        content: 'I wish I was there.',
      },
      {
        userId: 4,
        postId: 13,
        content: 'What a classic.',
      },
      {
        userId: 5,
        postId: 14,
        content: '::thinking::',
      },
      {
        userId: 6,
        postId: 15,
        content: 'Never surrender!',
      },
      {
        userId: 7,
        postId: 16,
        content: 'I wish I could make something this cool D:',
      },
      {
        userId: 8,
        postId: 17,
        content: 'He looks at peace.',
      },
      {
        userId: 9,
        postId: 18,
        content: 'Bigggg yeppppppp',
      },
      {
        userId: 1,
        postId: 19,
        content: 'That little adorable blob needs to do the thing!',
      },
      {
        userId: 2,
        postId: 20,
        content: 'Magic Methods',
      },
      {
        userId: 3,
        postId: 21,
        content: 'Ready for a night out on the town!',
      },
      {
        userId: 4,
        postId: 22,
        content: 'Who painted this?',
      },
      {
        userId: 5,
        postId: 23,
        content: 'OH I like this one.',
      },
      {
        userId: 6,
        postId: 24,
        content: 'Never!!!!',
      },
      {
        userId: 7,
        postId: 25,
        content: 'Who knows.',
      },
      {
        userId: 8,
        postId: 26,
        content: 'Thanks for sharing this!',
      },
      {
        userId: 9,
        postId: 27,
        content: 'I wanna go next time!',
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Comments', null, {});

  }
};
