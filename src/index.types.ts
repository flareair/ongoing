import { StatusesState } from './status/Status.types';
import { TasksState } from './task/Task.types';
import { BoardState } from './board/Board.types';

export interface State extends TasksState, StatusesState, BoardState {}

export interface Action {
  type: string
}
