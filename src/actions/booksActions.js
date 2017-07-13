import * as types from './actionTypes';

export function postBook(book){
  return {
    type: types.POST_BOOK_SUCCESS,
    payload: book
  }
}

export function updateBook(book) {
  return {
    type: types.UPDATE_BOOK_SUCCESS,
    payload: book
}

export function deleteBook(id) {
  return {
    type: types.DELETE_BOOK_SUCCESS,
    payload: id
  }
}
