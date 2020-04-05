import { TASK_REMOVE } from './Task.actions';

const initialState = {
  taskById: {
    task_1: {
      id: 'task_1',
      title: 'Do homework'
    },
    task_2: {
      id: 'task_2',
      title: 'Home duties'
    },
    task_3: {
      id: 'task_3',
      title: 'Buy flowers'
    }
  },
  tasksByStatus: {
    status_1: ['task_1'],
    status_2: ['task_2'],
    status_3: ['task_3']
  },
  allTasks: ['task_1', 'task_2', 'task_3']
};

export const taskById = (state = initialState.taskById, action) => {
  switch (action.type) {

  case TASK_REMOVE:
    const {
      [action.taskId]: _taskIdToRemove,
      ...restOfTasks
    } = state;

    return restOfTasks;

  default:
    return state;
  }
};

export const tasksByStatus = (state = initialState.tasksByStatus, action) => {
  switch (action.type) {
  case TASK_REMOVE:
    const { taskId, taskStatusId } = action;
    return {
      ...state,
      [taskStatusId]: state[taskStatusId].filter(taskFromList => taskFromList !== taskId)
    };
  default:
    return state;
  }
};

export const allTasks = (state = initialState.allTasks, action) => {
  switch (action.type) {
  case TASK_REMOVE:
    return state.filter(taskFromList => taskFromList !== action.taskId);
  default:
    return state;
  }
};
