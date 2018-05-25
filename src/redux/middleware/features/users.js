import {USERS, SET_USERS, FETCH_USERS, setUsers} from "../../actions/users";
import {API_ERROR, API_SUCCESS, apiRequest} from "../../actions/api";
import {setLoader, setNotification} from "../../actions/ui";

export const usersMidlleware = () => (next) => (action) => {
  next(action);

  switch(action.type) {

    case FETCH_USERS:
      next(apiRequest({method: 'GET', url: 'http://localhost:3001/users', body: null, feature: USERS }));
      next(setLoader({flag: true, feature: USERS}));
      break;

    case `${USERS} ${API_SUCCESS}`:
      next(setUsers(
        action.payload.results, 'email'
      ));
      next(setLoader({
        flag: false,
        feature: USERS}));
      break;

    case `${USERS} ${API_ERROR}`:
      next(setNotification({ message: action.payload }));
      next(setLoader({flag: false, feature: USERS}));
      break;
  }

};
