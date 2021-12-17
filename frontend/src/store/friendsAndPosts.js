import { csrfFetch } from './csrf';

//action type
const GET_FRIENDS_AND_POSTS = 'user/GET_FRIENDS_AND_POSTS'

//action creators
const mainFeed = (payload) => ({
    type: GET_FRIENDS_AND_POSTS,
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

//reducer
const initialState = {}
const friendsAndPostsReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_FRIENDS_AND_POSTS: {
            newState = { ...state }
            newState = action.payload
            return newState
        }
        default:
            return state;
    }
}

export default friendsAndPostsReducer;