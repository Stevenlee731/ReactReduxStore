import * as types from '../actions/actionTypes';
// import initialState from './initialState';

export default function cartReducer(state = {cart:[]}, action) {
  switch(action.type) {
    case types.ADD_TO_CART:
      return {cart:[...state.cart, ...action.payload]}
    default:
      return state
  }
}
