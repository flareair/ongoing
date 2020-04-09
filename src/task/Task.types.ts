export interface removeTaskAction {
  type: string,
  taskId: string,
  taskStatusId: string
}

export interface Task {
  id: string,
  title: string
}

export interface taskByIdState {
  [prop: string]: Task
}

export interface tasksByStatusState {
  [prop: string]: string[]
}

export type allTasksState = string[];

export interface tasksState {
  taskById: taskByIdState,
  tasksByStatus: tasksByStatusState
  allTasks: allTasksState
}
