import { combineReducers } from 'redux';
import books from './bookReducer.js'
import cart from './cartReducer.js'

const rootReducer = combineReducers({
  books,
  cart
});

export default rootReducer;
