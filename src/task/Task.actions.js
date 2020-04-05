export const TASK_REMOVE = 'TASK_REMOVE';

export const removeTask = (taskId, taskStatusId) => {
  return {
    type: 'TASK_REMOVE',
    taskId,
    taskStatusId
  };
};
