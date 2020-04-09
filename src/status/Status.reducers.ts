import { StatusesState, StatusByIdState, AllStatusesState } from './Status.types';

const initialState: StatusesState = {
  statusById: {
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

export const statusById = (state: StatusByIdState = initialState.statusById, action): StatusByIdState => {
  return state;
};

export const allStatuses = (state: AllStatusesState  = initialState.allStatuses, action): AllStatusesState => {
  return state;
};
