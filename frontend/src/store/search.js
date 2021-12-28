import { csrfFetch } from './csrf';


const SEARCH_RESULTS = 'search/SEARCH_RESULTS'

const searchResults = (results) => ({
    type: SEARCH_RESULTS,
    results
})

export const searchResultsThunk = (searchTerm) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/search/${searchTerm}`)
    if (response.ok) {
        const results = await response.json()
        dispatch(searchResults(results))
        return results;
    }
}

const initialState = {}
const searchResultReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case SEARCH_RESULTS: {
            newState = { ...action?.results }
            return newState
        }
        default:
            return state;
    }
}

export default searchResultReducer;