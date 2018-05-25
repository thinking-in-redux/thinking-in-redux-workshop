import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import {DevTools} from '../ui/DevTool';
import {books} from './reducers/books';
import {ui} from './reducers/ui';
import {booksMidlleware} from './middleware/features/books';
import {apiMiddleware} from './middleware/core/api';
import {usersMidlleware} from "./middleware/features/users";
import {users} from './reducers/users';
import {normalizeMiddleware} from "./middleware/core/normalize";

const rootReducer = combineReducers({books, ui, users});

const featureMiddleware = [
  booksMidlleware,
  usersMidlleware
];

const coreMiddleware = [
  apiMiddleware,
  normalizeMiddleware
];

// compose store enhancers
const enhancer = compose(
  applyMiddleware(...featureMiddleware, ...coreMiddleware),
  DevTools.instrument()
);

export const store = createStore(rootReducer, enhancer);
