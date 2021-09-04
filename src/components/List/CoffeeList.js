import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import HeartBtn from '../../components/Detail/HeartBtn';

class CoffeeList extends Component {
  render() {
    return (
      <div className="coffeeDetailWrap" key={this.props.id}>
        <div className="coffeeImgWrap">
          <img
            src={this.props.img}
            alt={this.props.title}
            className="coffeeImg"
          />
        </div>
        <div className="coffeeNameWrap">
          <p className="coffeeName">{this.props.title}</p>
          <HeartBtn className="heartBtn" id="heartBtn" icon={faHeart} />
        </div>
      </div>
    );
  }
}

export default CoffeeList;
