import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types'

import { getBoardName, getStatuses, getTaskCount } from './Board.selectors'
import Status from '../status/Status';

class Board extends React.Component {
  render() {
    return (
      <main className="container">
        <h1>{this.props.boardName} ({this.props.taskCount})</h1>
        <div className="row px-2">
          {
            this.props.statuses.map(status => {
              return <Status status={status} key={status.id}/>
            })
          }
        </div>
      </main>
    );
  }
}

Board.propTypes = {
  boardName: PropTypes.string,
  statuses: PropTypes.array,
  taskCount: PropTypes.number
};

export default connect(
  createStructuredSelector(
    {
      boardName: getBoardName,
      statuses: getStatuses,
      taskCount: getTaskCount
    }
  )
)(Board);
