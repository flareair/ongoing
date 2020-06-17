import React, { FunctionComponent } from 'react';

import { Status } from '../status/Status.types';

interface IAddTaskProps {
  status: Status
}

export const AddTask: FunctionComponent<IAddTaskProps> = () => {
  return (
    <button className="btn btn-primary">Add task</button>
  );
};
