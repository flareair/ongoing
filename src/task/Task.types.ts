import { TASK_REMOVE } from './Task.actions';

export interface RemoveTaskAction {
  type: typeof TASK_REMOVE,
  taskId: string,
  taskStatusId: string
}

export interface Task {
  id: string,
  title: string
}

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
