export interface RemoveTaskAction {
  type: string,
  taskId: string,
  taskStatusId: string
}

export interface Task {
  id: string,
  title: string
}

export interface TaskByIdState {
  [prop: string]: Task
}

export interface TasksByStatusState {
  [prop: string]: string[]
}

export type AllTasksState = string[];

export interface TasksState {
  taskById: TaskByIdState,
  tasksByStatus: TasksByStatusState
  allTasks: AllTasksState
}
