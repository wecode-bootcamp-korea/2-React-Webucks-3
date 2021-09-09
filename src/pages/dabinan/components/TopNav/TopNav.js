import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopNav.scss';

class TopNav extends Component {
  render() {
    return (
      <>
        <header className="TopNav">
          <Link to="/login-dabin">
            <h1 className="topNavLogo"> WeBucks</h1>
          </Link>
          <ul className="topNavList">
            <li>COFFEE</li>
            <Link to="/list-dabin">
              <li>MENU</li>
            </Link>
            <li>STORE</li>
            <li>WHAT'S NEW</li>
          </ul>
        </header>
      </>
    );
  }
}

export default TopNav;
