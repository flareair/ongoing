import { nanoid } from 'nanoid';

import { Task, RemoveTaskAction, AddTaskAction } from './Task.types';

export enum TaskActionTypes {
  TASK_REMOVE = 'TASK_REMOVE',
  TASK_ADD = 'TASK_ADD'
}

export const removeTask = (taskId: string, taskStatusId: string): RemoveTaskAction => {
  return {
    type: TaskActionTypes.TASK_REMOVE,
    taskId,
    taskStatusId
  };
};

export const addTask = (title: string, taskStatusId: string): AddTaskAction => {
  const task: Task = {
    id: nanoid(),
    title: title
  };

  return {
    type: TaskActionTypes.TASK_ADD,
    task,
    taskStatusId
  };
};
