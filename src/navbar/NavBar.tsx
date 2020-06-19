import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">Ongoing</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
              {/* left nav */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
              </ul>
              {/* right nav */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-item nav-link" to="/settings">Settings</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
