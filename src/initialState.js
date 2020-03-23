export default {
  board: {
    id: 1,
    name: 'Tasks to do'
  },
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
  tasksById: {
    task_1: {
      id: 'task_1',
      title: 'Do homework'
    },
    task_2: {
      id: 'task_2',
      title: 'Home duties'
    },
    task_3: {
      id: 'task_3',
      title: 'Buy flowers'
    }
  },
  tasksByStatus: {
    status_1: ['task_1'],
    status_2: ['task_2'],
    status_3: ['task_3']
  }
};
