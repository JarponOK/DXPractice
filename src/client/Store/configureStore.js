import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../reducers/index';

export default function configureStore() {
  return createStore(
    combineReducers,
    applyMiddleware(thunk)
  );
}
