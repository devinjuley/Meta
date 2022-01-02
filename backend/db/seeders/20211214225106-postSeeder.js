'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Posts', [
      {
        userId: 1,
        content: 'Trick photo!',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920461195083935854/YhGYD7PF3nvs2XGfZAD2G7-1200-80.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        content: 'The legend',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920461419646959637/3427.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        content: 'A king, if only in his own mind',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920465894201786508/2416008.png?width=1220&height=686',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        content: 'Float like a butterfly...',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920461638249902122/3565.png?width=686&height=686',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        content: 'What would you do?',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920466013865263154/nasa-space-suit-digital-art-space-wallpaper-preview.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        content: 'Classic art',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920466071914422334/fd3e5fbda7ac3dc367294fb34bf87963--paintings-tumblr-landscape-art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        content: 'Love the colors!',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920466271890460682/3e5a163f694e89d5fdd09395327d7aee--fantasy-images-buy-art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        content: 'Pooooo bear!',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920467011253973022/284867.png?width=1220&height=686',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        content: 'What game is this from?',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920467423260446790/bloodborne-key-art-full.png?width=1372&height=686',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        content: 'What timeframe was this painting depicting?',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920466467370205204/Tnv5oIp1Jjf5m0GW0cIdYp0gUtqeyMM64lfV251cAngjnST1MadD9lLszrNF-J3hcErYmvFvrrzZdii1dppfvfPmxD1AAZKVn6lCjqamUj8XVUUJ3bZivraObt8TEoS_8ldeiIKjGEDlcfS4TePS5B4qecWDcfUROI8bnabDT9FsIGkbPSSB7t_NwMiy-JE.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        content: '>_<',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920468843342757958/Programming-Memes-Programmer-while-sleeping.png?width=692&height=686',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        content: 'Beautiful day today',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920466780059729960/wallpaper_hd_1080p_free_download_for_laptop_001.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        content: 'Look at the starts ✨',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920466544574750720/2648501_Gogh.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        content: 'Hmmmm',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920469036561743892/eqntkqfehnj01.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        content: 'Damn you steve jobs!',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920467140740530226/banksy-the-tribute-follow-your-dreams-steve-jobs-serge-averbukh.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        content: 'This guy looks tough',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920466422730207233/237c-painting.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        content: 'What do you think he is thinking about?',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920466844291321936/boy-with-dog-o0.png?width=970&height=686',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        content: 'Yep',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920469548585603163/0z1mm6izqSeDiKukb.png?width=764&height=686',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        content: 'It\'s so cute though',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920469386966491137/NHY6FiaDTC.png?width=653&height=686',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        content: 'HOW?!',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920467500393705472/pexels-photo-312839.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        content: 'Cool cat',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920467749094965288/AP2605230201114_72DPI-2.png?width=539&height=686',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        content: 'Such a cool oil painting',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920466373136752660/a7a728768fb301fdaedbc97e5bfd8c87.png?width=457&height=686',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        content: 'Happy moon',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920467891063767160/1-return-to-wonderland-by-shawna-erback-shawna-erback.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        content: 'Not today!',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920468583572705321/17.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        content: 'Exactly',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920469463021805608/01-240x300.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        content: 'Love this',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920467273834192896/452188_509f42095a91400f80046f3ec7728f89.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 11,
        content: 'Went to this crazy visual room event with my family',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920465760080523314/merlin_185060118_47717a43-865b-48f2-b609-f5ac08baf51e-articleLarge.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 12,
        content: 'Went to this crazy visual room event with my family',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920465760080523314/merlin_185060118_47717a43-865b-48f2-b609-f5ac08baf51e-articleLarge.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 13,
        content: 'Went to this crazy visual room event with my family',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920465760080523314/merlin_185060118_47717a43-865b-48f2-b609-f5ac08baf51e-articleLarge.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 14,
        content: 'Went to this crazy visual room event with my family',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920465760080523314/merlin_185060118_47717a43-865b-48f2-b609-f5ac08baf51e-articleLarge.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 15,
        content: 'Went to this crazy visual room event with my family',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920465760080523314/merlin_185060118_47717a43-865b-48f2-b609-f5ac08baf51e-articleLarge.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 16,
        content: 'Went to this crazy visual room event with my family',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920465760080523314/merlin_185060118_47717a43-865b-48f2-b609-f5ac08baf51e-articleLarge.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 17,
        content: 'Went to this crazy visual room event with my family',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920465760080523314/merlin_185060118_47717a43-865b-48f2-b609-f5ac08baf51e-articleLarge.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 18,
        content: 'Went to this crazy visual room event with my family',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920465760080523314/merlin_185060118_47717a43-865b-48f2-b609-f5ac08baf51e-articleLarge.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 19,
        content: 'Went to this crazy visual room event with my family',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920465760080523314/merlin_185060118_47717a43-865b-48f2-b609-f5ac08baf51e-articleLarge.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 20,
        content: 'Went to this crazy visual room event with my family',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920465760080523314/merlin_185060118_47717a43-865b-48f2-b609-f5ac08baf51e-articleLarge.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 14,
        content: 'Went to this crazy visual room event with my family',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920465760080523314/merlin_185060118_47717a43-865b-48f2-b609-f5ac08baf51e-articleLarge.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 15,
        content: 'Went to this crazy visual room event with my family',
        imageUrl: 'https://media.discordapp.net/attachments/920460971997270016/920465760080523314/merlin_185060118_47717a43-865b-48f2-b609-f5ac08baf51e-articleLarge.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Posts', null, {});

  }
};
