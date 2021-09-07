import React, { Component } from 'react';
import './CoffeeCategory.scss';

class CoffeeCategory extends Component {
  render() {
    return (
      <>
        <div className="coffeeCategory" id="coldBrew">
          <div className="coffeeCategoryWithDecafImg">
            <a className="coffeeCategoryName" href="#coldBrew">
              {this.props.name}
            </a>
            <img
              className="decafImg"
              alt="DECAF"
              src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
            />
          </div>
          <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
        </div>
      </>
    );
  }
}

export default CoffeeCategory;
