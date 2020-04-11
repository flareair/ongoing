import { nanoid } from 'nanoid';

import { RemoveTaskAction, AddTaskAction } from './Task.types';

export const TASK_REMOVE: string = 'TASK_REMOVE';
export const TASK_ADD: string = 'TASK_ADD';

export const removeTask = (taskId: string, taskStatusId: string): RemoveTaskAction => {
  return {
    type: TASK_REMOVE,
    taskId,
    taskStatusId
  };
};

export const addTask = (title: string, taskStatusId: string): AddTaskAction => {
  return {
    type: TASK_ADD,
    taskId: nanoid(),
    title,
    taskStatusId
  };
};
