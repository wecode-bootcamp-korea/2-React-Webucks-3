import React, { Component } from 'react';
import TopNav from '../components/TopNav/TopNav';
import LikeButton from '../components/LikeButton/LikeButton';
import Review from './components/Review/Review';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="DetailPage">
        <TopNav> </TopNav>
        <main>
          <section className="container">
            <section className="title">
              <h1>콜드 브루</h1>
              <ul>
                <li>
                  <img
                    alt="home button"
                    src="https://image.istarbucks.co.kr/common/img/common/icon_home.png"
                  />
                </li>
                <li>
                  <img
                    alt="arrow"
                    src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
                  />
                </li>
                <li>MENU</li>
                <li>
                  <img
                    alt="arrow"
                    src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
                  />
                </li>
                <li>음료</li>
                <li>
                  <img
                    alt="arrow"
                    src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
                  />
                </li>
                <li>콜드 브루</li>
                <li>
                  <img
                    alt="arrow"
                    src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
                  />
                </li>
                <li>제주 비자림 콜드 브루</li>
              </ul>
            </section>
            <section className="coffeeInfo">
              <div className="Img">
                <img
                  alt="제주 비자림 콜드 브루"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
                />
              </div>
              <div className="nonImg">
                <div className="coffeeName">
                  <h2>
                    제주 비자림 콜드 브루
                    <br />
                    <span>Jeju Forest Cold Brew</span>
                  </h2>
                  <div className="likeButton">
                    <LikeButton />
                  </div>
                </div>
                <p className="description">
                  [제주지역 한정음료] 제주 천년의 숲 비자림을 연상시키는
                  <br />
                  음료로 제주에서 유기농 말차로 만든
                  <br />
                  파우더와 Cold Brew를 활용한 음료
                </p>
                <div className="Img2">
                  <img
                    alt="제주 비자림 콜드 브루"
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
                  />
                </div>
                <div className="nutrition">
                  <h5>
                    <p className="productNutritionInfo">제품 영양 정보</p>
                    <p className="nutritionInfoDetails">
                      Grande(그란데) / 473ml (16 fl oz)
                    </p>
                  </h5>
                  <div className="nutritionList">
                    <table className="leftTable">
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
                    </table>
                    <table className="rightTable">
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
                    </table>
                  </div>
                  <div className="alergy">알레르기 유발 요인: 없음</div>
                </div>
                <Review />
              </div>
            </section>
          </section>
        </main>
        <footer className="footer">
          <div className="footerCategory">
            <h3>COMPANY</h3>
            <ul>
              <li>한눈에 보기</li>
              <li>스타벅스 사명</li>
              <li>스타벅스 소개</li>
              <li>국내 뉴스룸</li>
              <li>세계의 스타벅스</li>
              <li>글로벌 뉴스룸</li>
            </ul>
          </div>
          <div className="footerCategory">
            <h3>CORPORATE SALES</h3>
            <ul>
              <li>단체 및 기업 구매 안내</li>
            </ul>
          </div>
          <div className="footerCategory">
            <h3>PARTNERSHIP</h3>
            <ul>
              <li>신규 입점 제의</li>
              <li>협력 고객사 등록 신청</li>
            </ul>
          </div>
          <div className="footerCategory">
            <h3>ONLINE COMMUNITY</h3>
            <ul>
              <li>페이스북</li>
              <li>트위터</li>
              <li>유튜브</li>
              <li>블로그</li>
              <li>인스타그램</li>
            </ul>
          </div>
          <div className="footerCategory">
            <h3>RECRUIT</h3>
            <ul>
              <li>채용 소개</li>
              <li>채용 지원하기</li>
            </ul>
          </div>
          <div className="footerCategory">
            <h3>WEBUCKS</h3>
            <ul>
              <li></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Detail;
