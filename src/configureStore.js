import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';

import { taskById, tasksByStatus, allTasks } from './task/Task.reducers';
import { board } from './board/Board.reducers';
import { statusesById, allStatuses } from './status/Statuses.reducers';

const rootReducer = combineReducers({
  board,
  taskById,
  tasksByStatus,
  allTasks,
  statusesById,
  allStatuses
});

export default  function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(logger, thunkMiddleware)
  );
};
