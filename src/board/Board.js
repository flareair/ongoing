import React from 'react';

import Status from '../status/Status';
import { connect } from 'react-redux';

class Board extends React.Component {
  render() {
    return (
      <main className="container">
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

function mapStateToProps(state) {
  function getStatuses(state) {
    return state.allStatuses.map(status => state.statusesById[status]);
  }

  return {
    board: state.board,
    statuses: getStatuses(state)
  }
}

export default connect(
  mapStateToProps
)(Board);
