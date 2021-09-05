import React, { Component } from 'react';
import COFFEE_INFO_LIST from '../data/CoffeeInfoList.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import './Description.scss';

export default class Description extends Component {
  constructor() {
    super();
    this.state = {
      isHeartClicked: false,
    };
  }

  clickHeartIcon = () => {
    this.setState({
      isHeartClicked: !this.state.isHeartClicked,
    });
  };

  render() {
    const coffeeInfo = COFFEE_INFO_LIST[0];

    return (
      <section className="Description">
        <span className="heartIcon" onClick={this.clickHeartIcon}>
          <FontAwesomeIcon
            icon={this.state.isHeartClicked ? heartSolid : heartRegular}
            size="2x"
          />
        </span>
        <div className="name">
          <p className="ko">{coffeeInfo.koName}</p>
          <p className="eng">{coffeeInfo.engName}</p>
        </div>
        <div className="detail">
          {coffeeInfo.description.split('\n').map(line => {
            return <p>{line}</p>;
          })}
        </div>
      </section>
    );
  }
}
