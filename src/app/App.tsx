import React, { Component } from 'react';

import './App.scss';

import NavBar from '../navbar/NavBar';
import Board from '../board/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Board />
      </div>
    );
  }
}

export default App;
