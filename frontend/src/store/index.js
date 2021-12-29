import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// importing reducers
import session from './session'
import mainFeed from './mainFeed'
// import sessionUserFriends from './friends'
import searchResults from './search';
import allUsers from './allusers'


//REDUCER COMBINER
const appReducer = combineReducers({
   session,
   mainFeed,
   // sessionUserFriends,
   searchResults,
   allUsers
});

const rootReducer = (state, action) => {
   if (action.type === 'REMOVE_USER') {
      return appReducer(undefined, action)
   }
   return appReducer(state, action)
}

let enhancer;
if (process.env.NODE_ENV === 'production') {
   enhancer = applyMiddleware(thunk);
} else {
   const logger = require('redux-logger').default;
   const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
   enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

//CONFIGURE THE STORE FUNCTION
const configureStore = (preloadedState) => {
   return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
