import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger, reduxImmutableStateInvariant())
  );
}
