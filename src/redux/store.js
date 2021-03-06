import {compose, createStore} from 'redux';
import {DevTools} from '../ui/DevTool';

// compose store enhancers
const enhancer = compose(
  DevTools.instrument()
);

export const store = createStore(s => s, enhancer);
