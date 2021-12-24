import { csrfFetch } from './csrf';

//action type
const SESSION_USER_FRIENDS = 'friends/SESSION_USER_FRIENDS'
const ALL_USERS = 'friends/ALL_USERS'


//action creators
const sessionFriends = (friends) => ({
    type: SESSION_USER_FRIENDS,
    friends
})

// const getAllUsers = () => ({
//     type: ALL_USERS,
//     payload
// })



//thunks
export const sessionFriendsThunk = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${id}/sessionfriends`)
    if (response.ok) {
        const friends = await response.json()
        dispatch(sessionFriends(friends))
        return friends;
    }
}

//reducer
const initialState = {}
const sessionFriendsReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case SESSION_USER_FRIENDS: {
            console.log('action.friends =========', action.friends)
            newState = {
                ...state
            }
            action.friends.forEach(friend => (
                newState[friend.friendId] = friend
            ))
            return newState
        }
        default:
            return state;
    }
}

export default sessionFriendsReducer;