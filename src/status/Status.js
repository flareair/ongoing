import React from 'react';

import Task from '../task/Task';
import './Status.scss';

class Status extends React.Component {
  render() {
    return (
      <div className="status col bg-light mx-1 py-3">
        <Task/>
        <Task/>
        <Task/>
      </div>
    );
  }
}

export default Status;
