import React from 'react';
import './App.scss';
import Board from './board/Board';

function App() {
  return (
    <div className="app">
      <div className="header container">
        <h1>Ongoing</h1>
      </div>
      <Board />
    </div>
  );
}

export default App;
