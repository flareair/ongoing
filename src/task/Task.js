import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.task.title}</h5>
        </div>
      </div>
    );
  }
}

export default Task;
