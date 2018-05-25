import {dataNormalized} from "../../actions/data";

export const normalizeMiddleware = ({dispatch}) => (next) => (action) => {

  if(action.type.includes('Set')
    && action.meta.key) {

    const map = action.payload.reduce(
      ( acc, item ) => {
        acc[item[action.meta.key]] = item;
        return acc;
      }, {});

    next(dataNormalized(action.meta.feature))
    next( { ...action, payload: map } )

  } else {
    next(action);
  }

};
