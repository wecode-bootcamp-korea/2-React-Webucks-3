import React, { Component } from 'react';
import './TopNav.scss';

class TopNav extends Component {
  render() {
    return (
      <header className="topNavHeader">
        <h1 className="topNavH1">WeBucks</h1>
        <nav>
          <ul className="topNavUl">
            <li className="topNavLi">COFFEE</li>
            <li className="topNavLi">MENU</li>
            <li className="topNavLi">STORE</li>
            <li className="topNavLi">WHAT'S NEW</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default TopNav;
