import React, { Component } from 'react';
import COFFEE_INFO_LIST from '../data/CoffeeInfoList.js';
import './Nutrition.scss';

export default class Nutrition extends Component {
  render() {
    const coffeeInfo = COFFEE_INFO_LIST[0];

    return (
      <section className="Nutrition">
        <div className="top">
          <span>제품 영양 정보</span>
          <span>
            {coffeeInfo.size} / {coffeeInfo.literSize}ml ({coffeeInfo.oz} fl oz)
          </span>
        </div>
        <div className="mid">
          <div className="midLeft">
            <div>
              <span>1회 제공량 (kcal)</span>
              <span>{coffeeInfo.calories}</span>
            </div>
            <div>
              <span>포화지방(g)</span>
              <span>{coffeeInfo.fat}</span>
            </div>
            <div>
              <span>단백질 (g)</span>
              <span>{coffeeInfo.protein}</span>
            </div>
          </div>
          <div className="midRight">
            <div>
              <span>나트륨 (mg)</span>
              <span>{coffeeInfo.sodium}</span>
            </div>
            <div>
              <span>당류 (g)</span>
              <span>{coffeeInfo.sugar}</span>
            </div>
            <div>
              <span>카페인 (mg)</span>
              <span>{coffeeInfo.caffein}</span>
            </div>
          </div>
        </div>
        <div className="bottom">알레르기 유발 요인 : {coffeeInfo.alergy}</div>
      </section>
    );
  }
}
