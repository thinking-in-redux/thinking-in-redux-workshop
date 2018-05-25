import {BOOKS, FETCH_BOOKS, setBooks} from "../../actions/books";
import {API_ERROR, API_SUCCESS, apiRequest} from "../../actions/api";
import {setLoader, setNotification} from "../../actions/ui";

export const booksMidlleware = () => (next) => (action) => {
  next(action);

  switch(action.type) {

    case FETCH_BOOKS:
      next(apiRequest({method: 'GET', url: 'http://localhost:3001/books', body: null, feature: BOOKS }));
      next(setLoader({flag: true, feature: BOOKS}));
      break;

    case `${BOOKS} ${API_SUCCESS}`:
      next(setBooks(
        action.payload.items, 'id'
      ));
      next(setLoader({
        flag: false,
        feature: BOOKS}));
      break;

    case `${BOOKS} ${API_ERROR}`:
      next(setNotification({ message: action.payload }));
      next(setLoader({flag: false, feature: BOOKS}));
      break;
  }

};
