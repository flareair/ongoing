import { State } from '../index.types';
import { Status } from '../status/Status.types';

export const getStatuses = (state: State): Status[] => state.allStatuses.map(status => state.statusById[status]);

export const getBoardName = (state: State): string => state.board.name;

export const getTaskCount = (state: State): number => state.allTasks.length;
