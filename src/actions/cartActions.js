import * as types from './actionTypes';

export function addToCart(book) {
  return {
    type: types.ADD_TO_CART,
    payload: book
  }
}

export function updateCart(_id, unit) {
  return {
    type: types.UPDATE_CART,
    _id: _id,
    unit: unit
  }
}

export function deleteCartItem(book) {
  return {
    type: types.DELETE_CART_ITEM,
    payload: book
  }
}
