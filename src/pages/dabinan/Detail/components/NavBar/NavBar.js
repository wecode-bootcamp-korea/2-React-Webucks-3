import React, { Component } from 'react';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <ul className="NavBar">
        <li>
          <img
            alt="home button"
            src="https://image.istarbucks.co.kr/common/img/common/icon_home.png"
          />
        </li>
        <li>
          <img
            alt="arrow"
            src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
          />
        </li>
        <li>MENU</li>
        <li>
          <img
            alt="arrow"
            src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
          />
        </li>
        <li>음료</li>
        <li>
          <img
            alt="arrow"
            src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
          />
        </li>
        <li>{this.props.coffeeCategory}</li>
        <li>
          <img
            alt="arrow"
            src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
          />
        </li>
        <li>{this.props.coffeeName}</li>
      </ul>
    );
  }
}

export default NavBar;
