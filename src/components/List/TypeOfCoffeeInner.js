import React, { Component } from 'react';

class TypeOfCoffeeInner extends Component {
  render() {
    return (
      <div className="coffeeTitleWrap" key={this.props.id}>
        <h2 className="coffeeTitle">{this.props.title}</h2>
        <img
          src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
          alt="coffee Icon"
          className="coffeeIcon"
        />
        <h4 className="coffeeSubTitle">
          디카페인 에스프레소 샷 추가 기능(일부 음료 제외)
        </h4>
      </div>
    );
  }
}

export default TypeOfCoffeeInner;
