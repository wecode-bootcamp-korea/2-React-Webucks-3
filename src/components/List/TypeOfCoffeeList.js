import React, { Component } from 'react';
import HeartBtn from '../Shared/HeartBtn';

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
          <HeartBtn />
        </div>
      </div>
    );
  }
}

export default CoffeeList;
