// import { csrfFetch } from './csrf';

// //action type
// const CREATE_COMMENT = 'comment/CREATE_COMMENT'
// const EDIT_COMMENT = 'comment/EDIT_COMMENT'
// const DELETE_COMMENT = 'comment/DELETE_COMMENT'

// //action creators
// const createComment = (comment) => ({
//     type: CREATE_COMMENT,
//     comment
// })

// const editComment = (comment) => ({
//     type: EDIT_COMMENT,
//     comment
// })

// const deleteComment = (comment) => ({
//     type: DELETE_COMMENT,
//     comment
// })

// //thunks
// export const createCommentThunk = (comment) => async (dispatch) => {
//     const response = await csrfFetch('/api/comment/create', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(comment)
//     })
//     if (response.ok) {
//         const comment = await response.json()
//         dispatch(createComment(comment))
//         return comment;
//     }
// }

// export const editCommentThunk = (comment) => async (dispatch) => {
//     const response = await csrfFetch(`/api/comment/${comment.id}/edit`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(comment)
//     })

//     if (response.ok) {
//         const comment = await response.json()
//         dispatch(editComment(comment))
//         return comment;
//     }
// }

// export const deleteCommentThunk = (commentId) => async (dispatch) => {
//     const response = await csrfFetch(`/api/comment/${commentId}/delete`, {
//         method: 'DELETE'
//     })
//     if (response.ok) {
//         const comment = await response.json()
//         dispatch(deleteComment(comment))
//         return comment
//     }
// }

// //reducer
// const initialState = {}
// const commentReducer = (state = initialState, action) => {

// }