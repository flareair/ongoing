import { Board } from './Board.types';

const initialState: Board = {
  id: 'board_1',
  name: 'Tasks to do'
};

export const board = (state: Board = initialState, action): Board => {
  return state;
};
