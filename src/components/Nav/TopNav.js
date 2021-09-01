import React, { Component } from 'react';
import './TopNav.scss';

class TopNav extends Component {
  render() {
    return (
      <header>
        <h1>WeBucks</h1>
        <nav>
          <ul>
            <li>COFFEE</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>WHAT'S NEW</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default TopNav;
