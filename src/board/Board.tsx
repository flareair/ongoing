import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getBoardName, getStatuses, getTaskCount } from './Board.selectors';
import Status from '../status/Status';
import { Status as StatusInterface } from '../status/Status.types';
import { State } from '../index.types';

interface BoardProps {
  boardName: string;
  statuses: StatusInterface[],
  taskCount: number
};

class Board extends React.Component<BoardProps> {
  render() {
    return (
      <main className="container">
        <div className="row px-2">
          {
            this.props.statuses.map(status => {
              return <Status status={status} key={status.id}/>;
            })
          }
        </div>
        <div className="row justify-content-center mt-3">
          <div>Total number of tasks: {this.props.taskCount}</div>
        </div>
      </main>
    );
  }
}

export default connect(
  createStructuredSelector<State, BoardProps>(
    {
      boardName: getBoardName,
      statuses: getStatuses,
      taskCount: getTaskCount
    }
  )
)(Board);
