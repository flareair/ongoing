import React, { Component } from 'react';

import './App.scss';

import Board from '../board/Board';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Board />
      </div>
    );
  }
}

export default App;
