export const TASK_REMOVE = 'TASK_REMOVE';

export interface removeTaskAction {
  type: typeof TASK_REMOVE,
  taskId: string,
  taskStatusId: string
}

export const removeTask = (taskId: string, taskStatusId: string): removeTaskAction => {
  return {
    type: TASK_REMOVE,
    taskId,
    taskStatusId
  };
};
