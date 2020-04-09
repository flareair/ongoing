import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from './Task.actions';

import { Task as TaskInterface } from './Task.types';

interface TaskProps {
  task: TaskInterface,
  removeTask: Function
}

class Task extends React.Component<TaskProps> {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.task.title}</h5>
          <button onClick={() => this.props.removeTask()} className="btn btn-default">Remove</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeTask: () => dispatch(removeTask(ownProps.task.id, ownProps.status.id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Task);
