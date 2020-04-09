import { StateInterface } from '../index.types';
import { Status } from '../status/Status.types';

export const getStatuses = (state: StateInterface): Status[] => state.allStatuses.map(status => state.statusById[status]);

export const getBoardName = (state: StateInterface): string => state.board.name;

export const getTaskCount = (state: StateInterface): number => state.allTasks.length;
