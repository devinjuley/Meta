import { csrfFetch } from './csrf';

//action type
const GET_FRIENDS_AND_POSTS = 'user/GET_FRIENDS_AND_POSTS'
const CREATE_POST = 'post/CREATE_POST'
const DELETE_POST = 'post/DELETE_POST'
const EDIT_POST = 'post/EDIT_POST'
const CREATE_COMMENT = 'comment/CREATE_COMMENT'
const EDIT_COMMENT = 'comment/EDIT_COMMENT'
const DELETE_COMMENT = 'comment/DELETE_COMMENT'
const FRIEND_REQUEST = 'friends/FRIEND_REQUEST'
const ACCEPT_REQUEST = 'friends/ACCEPT_REQUEST'
const REMOVE_FRIEND_REQUEST = 'friends/REMOVE_FRIEND_REQUEST'

//action creators
const mainFeed = (payload) => ({
    type: GET_FRIENDS_AND_POSTS,
    payload
})

const createPost = (payload) => ({
    type: CREATE_POST,
    payload
})

const deletePost = (payload) => ({
    type: DELETE_POST,
    payload
})

const editPost = (post) => ({
    type: EDIT_POST,
    post
})

const createComment = (comment) => ({
    type: CREATE_COMMENT,
    comment
})

const editComment = (comment, index) => ({
    type: EDIT_COMMENT,
    comment,
    index
})

const deleteComment = (comment) => ({
    type: DELETE_COMMENT,
    comment
})

const friendRequest = (request) => ({
    type: FRIEND_REQUEST,
    request
})

const removeFriendRequest = (request) => ({
    type: REMOVE_FRIEND_REQUEST,
    request
})

const acceptRequest = (request) => ({
    type: ACCEPT_REQUEST,
    request
})

//thunks
export const getMainFeed = (sessionUserId) => async (dispatch) => {
    const response = await fetch(`/api/users/${sessionUserId}/friends`)
    if (response.ok) {
        const payload = await response.json()
        dispatch(mainFeed(payload))
        return payload
    }
}

export const createPostThunk = (post) => async (dispatch) => {
    const response = await csrfFetch('/api/post/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    })
    if (response.ok) {
        const post = await response.json()
        dispatch(createPost(post))
        return post;
    }
}

export const deletePostThunk = (postId) => async (dispatch) => {
    const response = await csrfFetch(`/api/post/${postId}/delete`, {
        method: 'DELETE'
    })
    if (response.ok) {
        const post = await response.json()
        dispatch(deletePost(post))
        return post
    }
}

export const editPostThunk = (post) => async (dispatch) => {
    const response = await csrfFetch(`/api/post/${post.id}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    })

    if (response.ok) {
        const post = await response.json()
        dispatch(editPost(post))
        return post;
    }
}

export const createCommentThunk = (comment) => async (dispatch) => {
    const response = await csrfFetch('/api/comment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    })
    if (response.ok) {
        const comment = await response.json()
        dispatch(createComment(comment))
        return comment;
    }
}

export const editCommentThunk = (comment, index) => async (dispatch) => {
    const response = await csrfFetch(`/api/comment/${comment.id}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    })

    if (response.ok) {
        const comment = await response.json()
        dispatch(editComment(comment, index))
        return comment;
    }
}

export const deleteCommentThunk = (commentId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comment/${commentId}/delete`, {
        method: 'DELETE'
    })
    if (response.ok) {
        const comment = await response.json()
        dispatch(deleteComment(comment))
        return comment
    }
}

export const friendRequestThunk = (request) => async (dispatch) => {
    const response = await csrfFetch('/api/users/friendrequest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request)
    })
    if (response.ok) {
        const request = await response.json()
        dispatch(friendRequest(request))
        return request
    }
}

export const acceptRequestThunk = (request) => async (dispatch) => {
    const response = await csrfFetch('/api/users/acceptrequest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request)
    })
    if (response.ok) {
        const request = await response.json()
        dispatch(acceptRequest(request))
    }
}

//reducer
const initialState = {}
const mainFeedReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_FRIENDS_AND_POSTS: {
            newState = {
                ...state,
                user: {},
                friends: {},
                friendsPosts: {},
                friendRequests: {},
                friendsComments: {}
            }
            newState.user = action.payload.user
            action.payload.friends.forEach(friend => {
                newState.friends[friend.friendId] = friend
            })
            action.payload.friendRequests.forEach(request => {
                newState.friendRequests[request.friendId] = request
            })
            newState.friendsPosts = action.payload.friendsPosts
            newState.friendsComments = action.payload.friendsComments

            return newState
        }
        case CREATE_POST: {
            newState = {
                ...state,
            }
            newState['friendsPosts'][action?.payload?.newPost?.id] = action.payload.newPost
            const copiedState = { ...newState, 'friendsPosts': { ...newState?.friendsPosts } }
            return copiedState;
        }
        case DELETE_POST: {
            newState = { ...state }
            delete newState['friendsPosts'][action?.payload?.post?.id]
            const copiedState = { ...newState, 'friendsPosts': { ...newState?.friendsPosts } }
            return copiedState;
        }
        case EDIT_POST: {
            newState = { ...state }
            newState['friendsPosts'][action?.post?.id] = action.post
            const copiedState = { ...newState, 'friendsPosts': { ...newState?.friendsPosts } }
            return copiedState
        }
        case CREATE_COMMENT: {
            newState = { ...state }
            newState['friendsComments'][action?.comment?.newComment?.id] = action?.comment?.newComment
            const copiedState = {
                ...newState, 'friendsComments': { ...newState['friendsComments'] }
            }
            return copiedState;
        }
        case EDIT_COMMENT: {

            newState = { ...state }
            newState['friendsComments'][action?.comment?.id] = action?.comment

            const copiedState = {
                ...newState, 'friendsComments': { ...newState['friendsComments'] }
            }
            copiedState['friendsComments'][action?.comment?.id] = { ...action?.comment }

            return copiedState;
        }
        case DELETE_COMMENT: {
            newState = {
                ...state
            }
            delete newState['friendsComments'][action?.comment?.id]
            const copiedState = {
                ...newState, 'friendsComments': { ...newState['friendsComments'] }
            }
            return copiedState
        }
        case FRIEND_REQUEST: {
            newState = {
                ...state
            }
            newState['friendRequests'][action?.request?.friendId] = action?.request
            const copiedState = { ...newState, 'friendRequests': { ...newState['friendRequests'] } }
            return copiedState
        }
        case ACCEPT_REQUEST: {
            newState = {
                ...state
            }
            newState['friends'][action?.request?.friendId] = action?.request
            const copiedState = { ...newState, 'friends': { ...newState['friends'] } }
            return copiedState
        }
        default:
            return state;
    }
}

export default mainFeedReducer;