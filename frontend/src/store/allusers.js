import { csrfFetch } from './csrf';

const GET_ALL_USERS = 'allusers/GET_ALL_USERS'

const allUsers = (users) => ({
    type: GET_ALL_USERS,
    users
})

export const getAllUsersThunk = (comment) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/all`)
    if (response.ok) {
        const users = await response.json()
        dispatch(allUsers(users))
        return users
    }
}

const initialState = {}
const usersReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_ALL_USERS: {
            console.log(action.users)
            newState = {
                ...state,
            }
            action.users.forEach(user => (
                newState[user.id] = user
            ))
            return newState
        }
        default:
            return state;
    }
}

export default usersReducer;