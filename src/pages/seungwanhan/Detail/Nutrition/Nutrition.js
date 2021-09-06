import React, { Component } from 'react';
import COFFEE_INFO_LIST from '../data/CoffeeInfoList.js';
import './Nutrition.scss';

export default class Nutrition extends Component {
  constructor() {
    super();
    this.coffeeInfo = COFFEE_INFO_LIST[0];
  }

  render() {
    return (
      <section className="Nutrition">
        <div className="top">
          <span>제품 영양 정보</span>
          <span>
            {this.coffeeInfo.size} / {this.coffeeInfo.literSize}ml (
            {this.coffeeInfo.oz} fl oz)
          </span>
        </div>

        <div className="mid">
          <div className="midLeft">
            <div>
              <span>1회 제공량 (kcal)</span>
              <span>{this.coffeeInfo.calories}</span>
            </div>
            <div>
              <span>포화지방(g)</span>
              <span>{this.coffeeInfo.fat}</span>
            </div>
            <div>
              <span>단백질 (g)</span>
              <span>{this.coffeeInfo.protein}</span>
            </div>
          </div>
          <div className="midRight">
            <div>
              <span>나트륨 (mg)</span>
              <span>{this.coffeeInfo.sodium}</span>
            </div>
            <div>
              <span>당류 (g)</span>
              <span>{this.coffeeInfo.sugar}</span>
            </div>
            <div>
              <span>카페인 (mg)</span>
              <span>{this.coffeeInfo.caffein}</span>
            </div>
          </div>
        </div>

        <div className="bottom">
          알레르기 유발 요인 : {this.coffeeInfo.alergy}
        </div>
      </section>
    );
  }
}
