import { TaskActionTypes } from './Task.actions';

// Objects
export interface Task {
  id: string,
  title: string
}

// Actions
export interface RemoveTaskAction {
  type: TaskActionTypes.TASK_REMOVE,
  taskId: string,
  taskStatusId: string
}

export interface AddTaskAction {
  type: 'TASK_ADD',
  task: Task,
  taskStatusId: string
}

export type TaskActions = RemoveTaskAction | AddTaskAction;

// States
export interface TaskByIdState {
  readonly [prop: string]: Task
}

export interface TasksByStatusState {
  readonly[prop: string]: ReadonlyArray<string>
}

export type AllTasksState = ReadonlyArray<string>;

export interface TasksState {
  readonly taskById: TaskByIdState,
  readonly tasksByStatus: TasksByStatusState
  readonly allTasks: AllTasksState
}
