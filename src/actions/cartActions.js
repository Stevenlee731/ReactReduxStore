import * as types from './actionTypes';

export function addToCart(book) {
  return {
    type: types.ADD_TO_CART,
    payload:book;
  }
}
