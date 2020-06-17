import { nanoid } from 'nanoid';

import { Task, RemoveTask, AddTask } from './Task.types';

export enum TaskActionTypes {
  TASK_REMOVE = 'TASK_REMOVE',
  TASK_ADD = 'TASK_ADD'
}

export const removeTask = (taskId: string, taskStatusId: string): RemoveTask => {
  return {
    type: TaskActionTypes.TASK_REMOVE,
    taskId,
    taskStatusId
  };
};

export const addTask = (title: string, taskStatusId: string): AddTask => {
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
