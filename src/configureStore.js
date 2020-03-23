import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';

const rootReducer = function(state) {
  return state;
};

export default  function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, thunkMiddleware)
  )
};