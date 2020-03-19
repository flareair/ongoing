import React from 'react';

import Status from '../status/Status';

class Board extends React.Component {
  render() {
    return (
      <div>
        <h2>Board</h2>
        <Status />
        <Status />
        <Status />
      </div>
    );
  }
}

export default Board;
