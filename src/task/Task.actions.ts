import { removeTaskAction } from './Task.types'

export const TASK_REMOVE = 'TASK_REMOVE';

export const removeTask = (taskId: string, taskStatusId: string): removeTaskAction => {
  return {
    type: TASK_REMOVE,
    taskId,
    taskStatusId
  };
};
