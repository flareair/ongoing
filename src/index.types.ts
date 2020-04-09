import { StatusesState } from './status/Status.types';
import { TasksState } from './task/Task.types';
import { BoardState } from './board/Board.types';

export interface StateInterface extends TasksState, StatusesState, BoardState {}
