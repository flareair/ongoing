import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import NavBar from '../navbar/NavBar';
import Board from '../board/Board';
import { Settings } from '../settings/Settings';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path="/">
              <Board />
            </Route>
          </Switch>
          <Switch>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
