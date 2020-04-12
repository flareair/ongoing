import { TaskActionTypes } from './Task.actions';
import { TaskActions, TaskByIdState, TasksByStatusState, AllTasksState, TasksState } from './Task.types';

const initialState: TasksState = {
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

export const taskById = (state = initialState.taskById, action: TaskActions): TaskByIdState => {
  switch (action.type) {
  case TaskActionTypes.TASK_REMOVE:
    const {
      [action.taskId]: _taskIdToRemove,
      ...restOfTasks 
    } = state;

    return restOfTasks;
  case TaskActionTypes.TASK_ADD:
    const { task }  = action;
    return {
      ...state,
      [task.id]: task
    };

  default:
    return state;
  }
};

export const tasksByStatus = (state = initialState.tasksByStatus, action: TaskActions): TasksByStatusState => {
  switch (action.type) {
  case TaskActionTypes.TASK_REMOVE:
    return {
      ...state,
      [action.taskStatusId]: state[action.taskStatusId]
        .filter(taskFromList => taskFromList !== action.taskId)
    };
  case TaskActionTypes.TASK_ADD:
    return {
      ...state,
      [action.taskStatusId]: [...state[action.taskStatusId], action.task.id]
    };
  default:
    return state;
  }
};

export const allTasks = (state = initialState.allTasks, action: TaskActions): AllTasksState => {
  switch (action.type) {
  case TaskActionTypes.TASK_REMOVE:
    return state.filter(taskFromList => taskFromList !== action.taskId);
  default:
    return state;
  }
};
