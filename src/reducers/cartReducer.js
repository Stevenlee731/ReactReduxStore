import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function cartReducer(state = initialState.cart, action) {
  switch(action.type) {
    case types.ADD_TO_CART:
      return [...action.payload]
    case types.UPDATE_CART:
      const currentCart = [...state]

      const indexToUpdate = currentCart.findIndex(book => {
        return book._id === action._id
      })

      const newBookToUpdate = {
        ...currentCart[indexToUpdate],
        quantity: currentCart[indexToUpdate].quantity + action.unit
      }

      let cartUpdate = [...currentCart.slice(0, indexToUpdate), newBookToUpdate, ...currentCart.slice(indexToUpdate + 1)]
      return cartUpdate
    case types.DELETE_CART_ITEM:
      return [...action.payload]
    default:
      return state
  }
}
