const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Friend, Post, Comment } = require('../../db/models');

const router = express.Router();

router.post('/create', restoreUser, asyncHandler(async (req, res) => {
    const { userId, content, imageUrl } = req.body
    const post = await Post.create({
        userId,
        content,
        imageUrl,
    })

    const newPost = await Post.findByPk(post.id, {
        include: User
    })

    return res.json({ newPost })
}))

router.delete('/:id(\\d+)/delete', asyncHandler(async (req, res) => {
    const id = req.params.id
    const post = await Post.findByPk(id)
    console.log(post)
    await post.destroy()
    return res.json({ post })
}))

router.put('/:id(\\d+)/edit', restoreUser, asyncHandler(async (req, res) => {
    const { userId, content, imageUrl } = req.body
    const post = await Post.findByPk(req.params.id, {
        include: [User,
            { model: Comment, include: [User] }
        ]
    })
    post.update({
        userId,
        content,
        imageUrl
    })

    return res.json(post)
}))




module.exports = router;