import React from 'react';

import Status from '../status/Status';

class Board extends React.Component {
  render() {
    return (
      <main className="container">
        <div className="row px-2">
          <Status />
          <Status />
          <Status />
        </div>
      </main>
    );
  }
}

export default Board;
