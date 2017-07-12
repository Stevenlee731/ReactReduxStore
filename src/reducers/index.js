import { combineReducers } from 'redux';
import booksReducer from './bookReducer.js'

const rootReducer = combineReducers({
  booksReducer
});

export default rootReducer;
