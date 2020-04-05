export const getStatuses = state => state.allStatuses.map(status => state.statusesById[status]);

export const getBoardName = state => state.board.name;

export const getTaskCount = state => state.allTasks.length;
