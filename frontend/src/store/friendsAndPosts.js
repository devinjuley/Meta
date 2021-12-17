import { csrfFetch } from './csrf';

//action type
const GET_FRIENDS_AND_POSTS = 'user/GET_FRIENDS_AND_POSTS'
const CREATE_POST = 'post/CREATE_POST'

//action creators
const mainFeed = (payload) => ({
    type: GET_FRIENDS_AND_POSTS,
    payload
})

const createPost = (payload) => ({
    type: CREATE_POST,
    payload
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

//reducer
const initialState = {}
const friendsAndPostsReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_FRIENDS_AND_POSTS: {
            newState = {
                ...state,
                ...action.payload
            }
            return newState
        }
        case CREATE_POST: {
            newState = {
                ...state,
            }
            newState?.friendsPosts?.push(action.payload.newPost)
            return newState
        }
        default:
            return state;
    }
}

export default friendsAndPostsReducer;