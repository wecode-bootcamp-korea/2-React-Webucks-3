import React, { Component } from 'react';
import TopNav from '../components/TopNav/TopNav';
import NavBar from './components/NavBar/NavBar';
import LikeButton from '../components/LikeButton/LikeButton';
import Review from './components/Review/Review';
import Footer from '../components/Footer/Footer';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="DetailPage">
        <TopNav />
        <main>
          <section className="detailContainer">
            <section className="detailCoffeeTitle">
              <h1>콜드 브루</h1>
              <NavBar
                coffeeCategory="콜드 브루"
                coffeeName="제주 비자림 콜드 브루"
              />
            </section>
            <section className="detailCoffeeInfo">
              <div className="detailCoffeeInfoImg">
                <img
                  alt="제주 비자림 콜드 브루"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
                />
              </div>
              <div className="detailCoffeeInfoNonImg">
                <div className="detailCoffeeName">
                  <h2>
                    제주 비자림 콜드 브루
                    <br />
                    <span>Jeju Forest Cold Brew</span>
                  </h2>
                  <div className="detailLikeButton">
                    <LikeButton />
                  </div>
                </div>
                <p className="detailDescription">
                  [제주지역 한정음료] 제주 천년의 숲 비자림을 연상시키는
                  <br />
                  음료로 제주에서 유기농 말차로 만든
                  <br />
                  파우더와 Cold Brew를 활용한 음료
                </p>
                <div className="detailImg2">
                  <img
                    alt="제주 비자림 콜드 브루"
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
                  />
                </div>
                <div className="nutrition">
                  <h5 className="sizeForNutrition">
                    <p className="productNutritionInfo">제품 영양 정보</p>
                    <p className="nutritionInfoDetails">
                      Grande(그란데) / 473ml (16 fl oz)
                    </p>
                  </h5>
                  <div className="nutritionList">
                    <table className="leftTable">
                      <tbody>
                        <tr>
                          <td>1회 제공량(kcal)</td>
                          <td>340</td>
                        </tr>
                        <tr>
                          <td>포화지방 (g)</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <td>단백질 (g)</td>
                          <td>10</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="rightTable">
                      <tbody>
                        <tr>
                          <td>나트륨 (mg)</td>
                          <td>115</td>
                        </tr>
                        <tr>
                          <td>당류 (g)</td>
                          <td>44</td>
                        </tr>
                        <tr>
                          <td>카페인 (mg)</td>
                          <td>105</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="alergy">알레르기 유발 요인: 없음</div>
                </div>
                <Review />
              </div>
            </section>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Detail;
