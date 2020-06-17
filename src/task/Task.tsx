import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from './Task.actions';

import { Task as TaskInterface } from './Task.types';

interface TaskProps {
  task: TaskInterface,
  removeTask: Function,
  removeTaskHandler: Function
}

interface TaskState {
  removalInProgress: boolean
}

class Task extends React.Component<TaskProps, TaskState> {
  constructor(props) {
    super(props);

    this.state = {
      removalInProgress: false
    };

    this.removeTaskHandler = this.removeTaskHandler.bind(this);
  }

  removeTaskHandler(event: React.MouseEvent): void {
    this.setState({
      removalInProgress: true
    });

    setTimeout(this.props.removeTask, 300);
  }

  render() {
    return (
      <div className={'card ' + (this.state.removalInProgress ? 'bg-warning': '')}>
        <div className="card-body">
          <h5 className="card-title">{this.props.task.title}</h5>
          <button onClick={this.removeTaskHandler} className="btn btn-default">Remove</button>
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
