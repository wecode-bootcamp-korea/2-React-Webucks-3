import React, { Component } from 'react';
import './NutritionInfo.scss';

class NutritionInfo extends Component {
  render() {
    return (
      <div className="nutrition">
        <h5 className="sizeForNutrition">
          <p className="productNutritionInfo">제품 영양 정보</p>
          <p className="nutritionInfoDetails">{this.props.servingSize}</p>
        </h5>
        <div className="nutritionList">
          <table className="leftTable">
            <tbody>
              <tr>
                <td>1회 제공량(kcal)</td>
                <td>{this.props.kcal}</td>
              </tr>
              <tr>
                <td>포화지방 (g)</td>
                <td>{this.props.fat}</td>
              </tr>
              <tr>
                <td>단백질 (g)</td>
                <td>{this.props.protein}</td>
              </tr>
            </tbody>
          </table>
          <table className="rightTable">
            <tbody>
              <tr>
                <td>나트륨 (mg)</td>
                <td>{this.props.natrium}</td>
              </tr>
              <tr>
                <td>당류 (g)</td>
                <td>{this.props.sugars}</td>
              </tr>
              <tr>
                <td>카페인 (mg)</td>
                <td>{this.props.caffeine}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="alergy">알레르기 유발 요인: {this.props.allergen}</div>
      </div>
    );
  }
}

export default NutritionInfo;
