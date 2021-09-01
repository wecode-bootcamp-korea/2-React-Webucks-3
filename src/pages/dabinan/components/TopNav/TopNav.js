import React, { Component } from 'react';
import './TopNav.scss';

class TopNav extends Component {
  render() {
    return (
      <>
        <header className="TopNav">
          <h1> WeBucks</h1>
          <ul>
            <li>COFFEE</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>WHAT'S NEW</li>
          </ul>
        </header>
      </>
    );
  }
}

export default TopNav;
