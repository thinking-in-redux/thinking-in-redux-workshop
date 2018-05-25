import {SET_LOADER} from "../actions/ui";

const initState = {
  loader: false,
  notifications: {}
};

export const ui = (state = initState, action) => {
    switch (true) {

      case action.type.includes(SET_LOADER):
        return {...state, loader: action.payload};

      default:
        return state;
    }

};