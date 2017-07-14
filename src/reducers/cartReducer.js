import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function cartReducer(state = initialState.cart, action) {
  switch(action.type) {
    case types.ADD_TO_CART:
      return [...action.payload]
    case types.DELETE_CART_ITEM:
      return [...action.payload]
    default:
      return state
  }
}
