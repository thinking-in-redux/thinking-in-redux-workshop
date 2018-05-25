export const BOOKS = '[Books]';

export const FETCH_BOOKS = `${BOOKS} Fetch`;
export const SET_BOOKS = `${BOOKS} Set`;

export const fetchBooks = () => ({
  type: FETCH_BOOKS
});

export const setBooks = (books, key) => ({
  type: SET_BOOKS,
  payload: books,
  meta: {key, feature: BOOKS}
});
