import React from 'react';

import Task from '../task/Task';

class Status extends React.Component {
  render() {
    return (
      <div>
        <h3>Status</h3>
        <Task/>
        <Task/>
        <Task/>
      </div>
    );
  }
}

export default Status;
