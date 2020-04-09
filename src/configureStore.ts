import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';

import { taskById, tasksByStatus, allTasks } from './task/Task.reducers';
import { board } from './board/Board.reducers';
import { statusById, allStatuses } from './status/Status.reducers';

const rootReducer = combineReducers({
  board,
  taskById,
  tasksByStatus,
  allTasks,
  statusById,
  allStatuses
});

export default  function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(logger, thunkMiddleware)
  );
};
