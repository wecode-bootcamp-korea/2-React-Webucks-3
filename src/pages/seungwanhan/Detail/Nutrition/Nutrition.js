import React, { Component } from 'react';
import COFFEE_INFO_LIST from '../data/CoffeeInfoList.js';
import './Nutrition.scss';

export default class Nutrition extends Component {
  render() {
    return (
      <section className="Nutrition">
        <div className="nutritionTop">
          <span>제품 영양 정보</span>
          <span>
            {COFFEE_INFO_LIST[0].size} / {COFFEE_INFO_LIST[0].literSize}ml (
            {COFFEE_INFO_LIST[0].oz} fl oz)
          </span>
        </div>

        <div className="nutritionMid">
          <div className="midLeft">
            <div>
              <span>1회 제공량 (kcal)</span>
              <span>{COFFEE_INFO_LIST[0].calories}</span>
            </div>
            <div>
              <span>포화지방(g)</span>
              <span>{COFFEE_INFO_LIST[0].fat}</span>
            </div>
            <div>
              <span>단백질 (g)</span>
              <span>{COFFEE_INFO_LIST[0].protein}</span>
            </div>
          </div>
          <div className="midRight">
            <div>
              <span>나트륨 (mg)</span>
              <span>{COFFEE_INFO_LIST[0].sodium}</span>
            </div>
            <div>
              <span>당류 (g)</span>
              <span>{COFFEE_INFO_LIST[0].sugar}</span>
            </div>
            <div>
              <span>카페인 (mg)</span>
              <span>{COFFEE_INFO_LIST[0].caffein}</span>
            </div>
          </div>
        </div>

        <div className="nutritionBottom">
          알레르기 유발 요인 : {COFFEE_INFO_LIST[0].alergy}
        </div>
      </section>
    );
  }
}
