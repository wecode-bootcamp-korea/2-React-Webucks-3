import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './TopNav.scss';

class TopNav extends Component {
  render() {
    return (
      <header className="TopNav">
        <Link to="/">
          <p className="logo">WeBucks</p>
        </Link>
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
