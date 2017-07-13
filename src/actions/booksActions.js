import * as types from './actionTypes';

export function getBooks() {
  return {
    type: types.GET_BOOKS_SUCCESS
  }
}

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
}

export function deleteBook(id) {
  return {
    type: types.DELETE_BOOK_SUCCESS,
    payload: id
  }
}
