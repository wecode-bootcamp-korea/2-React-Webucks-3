import React, { Component } from "react";
import "./TopNav.scss";

class TopNav extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="inner">
          <a href="/" className="logo">
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
      </React.Fragment>
    );
  }
}

export default TopNav;
