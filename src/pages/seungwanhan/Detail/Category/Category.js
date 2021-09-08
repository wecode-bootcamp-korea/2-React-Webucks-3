import React, { Component } from 'react';
import './Category.scss';

export default class Category extends Component {
  render() {
    return (
      <nav className="Category">
        <p className="coffeeName">콜드 브루</p>
        <p className="menuRoute">
          홈 &gt; MENU &gt; 음료 &gt; 콜드 브루 &gt; 제주 비자림 콜드 브루
        </p>
      </nav>
    );
  }
}
