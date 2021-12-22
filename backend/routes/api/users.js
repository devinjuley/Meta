const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Friend, Post, Comment, FriendRequest } = require('../../db/models');

const router = express.Router();



router.get('/:id(\\d+)/friends', asyncHandler(async (req, res) => {
   const { id } = req.params
   const friends = await Friend.findAll({
      where: {
         sessionUserId: id
      },
      include: User
   })

   const posts = await Post.findAll({
      include: User
   })

   const friendRequests = await FriendRequest.findAll({
      where: {
         sessionUserId: id
      },
      include: User
   })


   const friendIds = [Number(id)]
   friends.forEach(friend => {
      friendIds.push(friend.User.id)
   })

   const friendsPosts = {}
   posts.forEach(post => {
      if (friendIds.includes(post.userId)) {
         friendsPosts[post.id] = post
      }
   })

   const comments = await Comment.findAll({
      include: User
   })
   const friendsComments = {}
   comments.forEach(comment => {
      if (friendIds.includes(comment.userId)) {
         friendsComments[comment.id] = comment
      }
   })


   return res.json({ friends, friendsPosts, friendRequests, friendsComments })
}))


router.get('/:id(\\d+)/friendsposts', asyncHandler(async (req, res) => {
   const { id } = req.params
   const friends = await Friend.findAll({
      where: {
         sessionUserId: id
      },
      include: User
   })

   const posts = await Post.findAll({
      include: [User,
         { model: Comment, include: [User] }
      ]
   })

   const friendIds = [Number(id)]
   friends.forEach(friend => {
      friendIds.push(friend.User.id)
   })

   const friendsPosts = {}
   posts.forEach(post => {
      if (friendIds.includes(post.userId)) {
         friendsPosts[post.id] = post
      }
   })

   const comments = await Comment.findAll()
   const friendsComments = {}
   comments.forEach(comment => {
      if (friendIds.includes(comment.userId)) {
         friendsComments[comment.id] = comment
      }
   })

   // console.log(friendsPosts)
   // for (let post in friendsPosts) {
   //    friendsPosts[post].Commentz = {}
   //    console.log(friendsPosts[post].Comments)
   //    friendsPosts[post].Comments.forEach(comment => {
   //       friendsPosts[post].Commentz[comment.id] = comment
   //    })

   // }

   return res.json(friendsComments)
}))

// console.log('==========================')


// SIGN UP
//sign up validators
const validateSignup = [
   check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
   // check('username')
   //    .exists({ checkFalsy: true })
   //    .isLength({ min: 4 })
   //    .withMessage('Please provide a username with at least 4 characters.'),
   // check('username')
   //    .not()
   //    .isEmail()
   //    .withMessage('Username cannot be an email.'),
   check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
   handleValidationErrors,
];

// sign up post route
router.post('/', validateSignup, asyncHandler(async (req, res) => {
   const { firstName, lastName, email, workplace, city, state, birthCity, birthState, profileImageUrl, backgroundImageUrl, password } = req.body;
   const user = await User.signup({ email, password, firstName, lastName, workplace, city, state, birthCity, birthState, profileImageUrl, backgroundImageUrl });

   await setTokenCookie(res, user);

   return res.json({
      user
   });
}));



module.exports = router;
