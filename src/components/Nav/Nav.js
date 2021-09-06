import React, { Component } from 'react';

import './Nav.scss';

class TopNav extends Component {
  render() {
    return (
      <header className="TopNav">
        <a href="/">
          <p className="logo">WeBucks</p>
        </a>
        <div className="mainMenu">
          <ul className="storeMenu">
            <li className="itemName">COFFEE</li>
            <li className="itemName">MENU</li>
            <li className="itemName">STORE</li>
            <li className="itemName">WHAT'S NEW</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default TopNav;
