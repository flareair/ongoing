import { TASK_REMOVE, TASK_ADD } from './Task.actions';

export interface RemoveTaskAction {
  type: typeof TASK_REMOVE,
  taskId: string,
  taskStatusId: string
}

export interface AddTaskAction {
  type: typeof TASK_ADD,
  taskId: string,
  title: string
  taskStatusId: string
}

export type TaskAction = RemoveTaskAction | AddTaskAction;

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
