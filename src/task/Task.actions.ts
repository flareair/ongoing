import { RemoveTaskAction } from './Task.types'

export const TASK_REMOVE: string = 'TASK_REMOVE';

export const removeTask = (taskId: string, taskStatusId: string): RemoveTaskAction => {
  return {
    type: TASK_REMOVE,
    taskId,
    taskStatusId
  };
};
