import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from './Task.actions';

class Task extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.task.title}</h5>
          <button onClick={this.props.removeTask()} class="btn btn-primary">Go somewhere</button>
        </div>
      </div>
      
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeTask: () => dispatch(removeTask(ownProps.task.title, ownProps.status.id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Task);
