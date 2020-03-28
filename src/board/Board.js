import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Status from '../status/Status';

class Board extends React.Component {
  render() {
    return (
      <main className="container">
        <h1>{this.props.board.name}</h1>
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

function getStatuses(state) {
  return state.allStatuses.map(status => state.statusesById[status]);
}

function getBoardInfo(state) {
  return state.board;
}

export default connect(
  createStructuredSelector(
    {
      board: getBoardInfo,
      statuses: getStatuses
    }
  )
)(Board);
