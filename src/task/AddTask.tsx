import React, { FunctionComponent } from 'react';

import { Status } from '../status/Status.types';

interface AddTaskProps {
  status: Status
}

export const AddTask: FunctionComponent<AddTaskProps> = () => {
  function openTextArea() {

  }

  return (
    <div className="AddTask">
      <form>
        <div className="form-group">
          <textarea className="form-control"></textarea>
        </div>
      </form>
      
      <button className="btn btn-primary">Add task</button>
    </div>
  );
};
