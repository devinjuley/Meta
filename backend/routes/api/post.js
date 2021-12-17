const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Friend, Post } = require('../../db/models');

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


module.exports = router;