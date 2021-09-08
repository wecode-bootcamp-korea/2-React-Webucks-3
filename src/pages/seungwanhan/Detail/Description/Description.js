import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import COFFEE_INFO_LIST from '../data/CoffeeInfoList.js';
import './Description.scss';

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeartClicked: false,
    };
    this.coffeeInfo = COFFEE_INFO_LIST[0];
  }

  clickHeartIcon = () => {
    this.setState({
      isHeartClicked: !this.state.isHeartClicked,
    });
  };

  render() {
    return (
      <section className="Description">
        <FontAwesomeIcon
          className="heartIcon"
          icon={this.state.isHeartClicked ? heartSolid : heartRegular}
          size="2x"
          onClick={this.clickHeartIcon}
        />
        <div className="coffeeName">
          <p className="ko">{this.coffeeInfo.koName}</p>
          <p className="eng">{this.coffeeInfo.engName}</p>
        </div>
        <div className="coffeeDetail">
          {this.coffeeInfo.description.split('\n').map(line => {
            return <p>{line}</p>;
          })}
        </div>
      </section>
    );
  }
}
