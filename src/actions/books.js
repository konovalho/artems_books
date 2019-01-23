import { ADD_BOOK, REMOVE_BOOK, EDITING_BOOK, SET_VISIBILITY_FILTER } from './constants/books';

export const addBook = book => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const editBook = (id, newItem) => ({
  type: EDITING_BOOK,
  payload: {
    id,
    newItem,
  },
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
