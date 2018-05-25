import {SET_BOOKS} from "../actions/books";

export const books = (state= [], action) => {
  switch (action.type) {

    case SET_BOOKS:
      return action.payload;

    default:
      return state;
  }
};