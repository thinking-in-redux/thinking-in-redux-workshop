import {API_REQUEST, apiError, apiSuccess} from "../../actions/api";

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if(action.type.includes(API_REQUEST)) {
    const {method, url, feature} = action.meta;

    fetch(url, {method})
      .then( response => response.json())
      .then( data => dispatch(apiSuccess(data, feature)) )
      .catch( error=> dispatch(apiError(error, feature)))
  }

};


