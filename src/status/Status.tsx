import React from 'react';
import { connect } from 'react-redux';

import Task from '../task/Task';
import './Status.scss';
import { Status as StatusInterface } from './Status.types';
import { Task as TaskInterface} from '../task/Task.types';

interface StatusProps {
  status: StatusInterface
  tasks: TaskInterface[]
}

class Status extends React.Component<StatusProps> {
  render() {
    return (
      <div className="status col bg-light mx-1 py-3">
        <h2>{this.props.status.name}</h2>
        {
          this.props.tasks.map(task => {
            return <Task task={task} status={this.props.status} key={task.id}/>;
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    tasks: state.tasksByStatus[ownProps.status.id]
      .map(taskId => state.taskById[taskId])
  };
}

export default connect(
  mapStateToProps
)(Status);
