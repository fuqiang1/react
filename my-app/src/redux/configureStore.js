import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import about from './modules/about'
import app from './modules/app'
const loggerMiddleware = createLogger(); // initialize logger
const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore); // apply logger to redux
const reducer = combineReducers({
  about,
  app
});
const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;