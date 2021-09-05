import React, { Component } from 'react';
import TopNav from '../../../components/Nav/Nav.js';
import Category from './Category/Category.js';
import Description from './Description/Description.js';
import Nutrition from './Nutrition/Nutrition.js';
import ReviewList from './ReviewList/ReviewList.js';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <TopNav />
        <Category />
        <main className="contentsWrapper">
          <div className="leftSide">
            <img
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
              alt="제주 비자림 콜드 브루"
            />
          </div>
          <div className="rightSide">
            <Description />
            <Nutrition />
            <ReviewList />
          </div>
        </main>
      </div>
    );
  }
}

export default Detail;
