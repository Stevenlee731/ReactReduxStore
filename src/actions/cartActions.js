import * as types from './actionTypes';

export function addToCart(book) {
  return {
    type: types.ADD_TO_CART,
    payload:book;
  }
}

export function deleteBook(id) {
  return {
    type:"DELETE_BOOK",
    payload: id
  }
}
