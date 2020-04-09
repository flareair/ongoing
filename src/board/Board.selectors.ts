export const getStatuses = state => state.allStatuses.map(status => state.statusById[status]);

export const getBoardName = state => state.board.name;

export const getTaskCount = state => state.allTasks.length;
