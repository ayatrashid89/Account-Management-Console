import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';



const initialState = {};
const middleware = [thunk];

// we use the createStore and applyMiddleware functions given to us from redux
// create store initializes the store for your provider component in the App.js file
// it takes as parameters: rootReducer, initialState, and applyMiddleware
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;