import React, { Component } from 'react';

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
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
              </div>
              <div className="navbar-nav">
                <a className="nav-item nav-link float-right" href="/settings">Settings</a>
              </div>
            </div>
          </div>
        </nav>
    );
  }
}
