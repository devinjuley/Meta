const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { Op } = require('sequelize');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Friend, Post, Comment, FriendRequest } = require('../../db/models');

const router = express.Router();


router.get('/all', asyncHandler(async (req, res) => {
   const users = await User.findAll({
      include: FriendRequest
   })
   return res.json(users)
}))

router.get('/search/:searchTerm', asyncHandler(async (req, res) => {
   const { searchTerm } = req.params
   const users = await User.findAll({
      where: {
         [Op.or]: [{ firstName: { [Op.iLike]: `%${searchTerm}%` } }, { lastName: { [Op.iLike]: `%${searchTerm}%` } }]
      }
   })
   return res.json(users)
}))


router.get('/:id(\\d+)/friends', asyncHandler(async (req, res) => {
   const { id } = req.params
   const user = await User.findByPk(id)

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

      friendsComments[comment.id] = comment

   })


   return res.json({ user, friends, friendsPosts, friendRequests, friendsComments })
}))


router.get('/:id(\\d+)/sessionfriends', asyncHandler(async (req, res) => {
   const { id } = req.params
   const friends = await Friend.findAll({
      where: {
         sessionUserId: id
      },
      include: User
   })

   return res.json(friends)
}))

router.post('/friendrequest', asyncHandler(async (req, res) => {
   const { sessionUserId, friendId } = req.body
   const request = await FriendRequest.create({
      sessionUserId,
      friendId
   })

   return res.json(request)
}))

router.post('/acceptrequest', asyncHandler(async (req, res) => {
   const { sessionUserId, friendId } = req.body
   await Friend.create({
      sessionUserId: sessionUserId,
      friendId: friendId
   })
   await Friend.create({
      sessionUserId: friendId,
      friendId: sessionUserId
   })
   const friend = await Friend.findOne({
      where: {
         sessionUserId,
         friendId
      },
      include: User
   })
   return res.json(friend)
}))

router.delete('/deleterequest/:id(\\d+)', asyncHandler(async (req, res) => {
   const { id } = req.params
   const request = await FriendRequest.findByPk(id)
   await request.destroy()
   return res.json(request)
}))

router.delete('/:sessionUserId(\\d+)/removefriend/:friendId(\\d+)', asyncHandler(async (req, res) => {
   const { sessionUserId, friendId } = req.params
   const entry1 = await Friend.findOne({
      where: {
         sessionUserId: friendId,
         friendId: sessionUserId
      }
   })
   const entry2 = await Friend.findOne({
      where: {
         sessionUserId,
         friendId
      }
   })
   await entry1.destroy()
   await entry2.destroy()
   return res.json(entry2)
}))




// SIGN UP
//sign up validators
const validateSignup = [
   check('firstName')
      .notEmpty()
      .withMessage('Please provide a first name'),
   check('lastName')
      .notEmpty()
      .withMessage('Please provide a last name'),
   check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email'),
   check('workplace')
      .notEmpty()
      .withMessage('Please provide a workplace'),
   check('city')
      .notEmpty()
      .withMessage('Please provide a city'),
   check('state')
      .notEmpty()
      .withMessage('Please provide a state'),
   check('birthCity')
      .notEmpty()
      .withMessage('Please provide a birth city'),
   check('birthState')
      .notEmpty()
      .withMessage('Please provide a birth state'),
   check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more'),
   check('profileImageUrl')
      .isURL({ require_protocol: false, require_host: false })
      .withMessage('Please provide a valid URL address'),
   check('backgroundImageUrl')
      .isURL({ require_protocol: false, require_host: false })
      .withMessage('Please provide a valid URL address'),
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
