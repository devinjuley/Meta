const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Friend, Post, Comment } = require('../../db/models');

const router = express.Router();

router.post('/create', restoreUser, asyncHandler(async (req, res) => {
    const { userId, postId, content } = req.body
    const comment = await Comment.create({
        userId,
        postId,
        content,
    })

    const newComment = await Comment.findByPk(comment.id, {
        include: User
    })

    return res.json({ newComment })
}))

router.delete('/:id(\\d+)/delete', asyncHandler(async (req, res) => {
    const id = req.params.id
    const comment = await Comment.findByPk(id)
    await comment.destroy()
    return res.json(comment)
}))

router.put('/:id(\\d+)/edit', restoreUser, asyncHandler(async (req, res) => {
    const { userId, postId, content } = req.body
    const comment = await Comment.findByPk(req.params.id, {
        include: User
    })
    comment.update({
        userId,
        postId,
        content
    })

    return res.json(comment)
}))




module.exports = router;