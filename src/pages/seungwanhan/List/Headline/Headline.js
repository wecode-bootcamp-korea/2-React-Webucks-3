import React, { Component } from 'react';
import './Headline.scss';

class Headline extends Component {
  render() {
    return (
      <section className="headline">
        <span>{this.props.coffeeName}</span>
        <span>
          <img src="" alt="" />
        </span>
        <span className="addShot">
          디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </span>
      </section>
    );
  }
}

export default Headline;
