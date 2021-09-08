import React, { Component } from 'react';
import CoffeeIcon from './coffeeIcon.png';
import './CoffeeCategory.scss';

export default class CoffeeCategory extends Component {
  render() {
    return (
      <section className="CoffeeCategory">
        <span>{this.props.coffeeName}</span>
        <span>
          <img src={CoffeeIcon} alt="coffeeIcon" />
        </span>
        <span className="addShot">
          디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </span>
      </section>
    );
  }
}
