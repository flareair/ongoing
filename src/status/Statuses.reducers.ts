const initialState = {
  statusesById: {
    status_1: {
      id: 'status_1',
      name: 'TODO'
    },
    status_2: {
      id: 'status_2',
      name: 'In Progress'
    },
    status_3: {
      id: 'status_3',
      name: 'Done'
    }
  },
  allStatuses: ['status_1', 'status_2', 'status_3'],
};

export const statusesById = (state = initialState.statusesById, action) => {
  return state;
};

export const allStatuses = (state = initialState.allStatuses, action) => {
  return state;
};
