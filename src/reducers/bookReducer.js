import * as types from '../actions/actionTypes';
import initialState from './initialState'

export default function booksReducer(state = initialState.books, action) {
  switch(action.type) {
    case types.GET_BOOKS_SUCCESS:
      return [...state]
    case types.POST_BOOK_SUCCESS:
      return [...state, ...action.payload]
    case types.DELETE_BOOK_SUCCESS:
      const currentBookToDelete = [...state]
      const indexToDelete = currentBookToDelete.findIndex((book) => {
        return book.id === action.payload.id
      })
      return [...currentBookToDelete.slice(0, indexToDelete),
        ...currentBookToDelete.slice(indexToDelete + 1)]
    case types.UPDATE_BOOK_SUCCESS:
      const currentBookToUpdate = [...state]
      const indexToUpdate = currentBookToUpdate.findIndex(book => {
        return book.id === action.payload.id
      })
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      }
      return [
        ...currentBookToUpdate.slice(0, indexToUpdate),
        newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)
      ]
    default:
      return state
  }
}
