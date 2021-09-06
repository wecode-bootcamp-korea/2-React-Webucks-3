/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import TopNav from '../../../components/Nav/TopNav';
import Review from '../../../components/DetailReview';
import Footer from '../../../components/DetailFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      heartClicked: false,
    };
  }

  heartOnOff = () => {
    this.setState({ heartClicked: !this.state.heartClicked });
  };

  render() {
    const { heartClicked } = this.state;
    return (
      <>
        <TopNav />

        <div className="nameColdbrew">
          <span>콜드 브루</span>
        </div>
        <div className="arrow-nav">
          <nav>
            <ul>
              <li>
                <a>홈</a>
              </li>
              <li>&gt;</li>
              <li>
                <a>MENU</a>
              </li>
              <li>&gt;</li>
              <li>
                <a>음료</a>
              </li>
              <li>&gt;</li>
              <li>
                <a>브루드 커피</a>
              </li>
              <li>&gt;</li>
              <li>
                <a>아이스 커피</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="container">
          <img
            alt="나이트로바닐라크림"
            src="/images/jihoonhan/나이트로바닐라크림.jpg"
          />
          <div className="table">
            <div className="coffeename">
              <span className="kor">나이트로 바닐라 크림</span>
              <span className="eng">
                <br />
                Nitro vanilla Cream
              </span>
              <FontAwesomeIcon
                className={heartClicked ? 'fas heart' : 'heart'}
                icon={heartClicked ? fasHeart : farHeart}
                onClick={this.heartOnOff}
              />
            </div>
            <div className="coffee-detail">
              부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에
              느껴보세요!
            </div>
            <div className="size">
              <span className="jepum">제품 영양 정보</span>
              <span className="ryang">Tall(톨) / 355ml (12 fl oz)</span>
            </div>

            <div className="ingredients">
              <div className="ingredients-name">
                <span>
                  1회 제공량 (kcal)
                  <br />
                </span>
                <span>
                  포화지방 (g)
                  <br />
                </span>
                <span>단백질 (g)</span>
              </div>
              <div className="measure-left">
                <span className="measure">
                  75
                  <br />
                </span>
                <span className="measure">
                  2<br />
                </span>
                <span className="measure">1</span>
              </div>
              <div className="ingredients-name">
                <span>
                  나트륨 (mg)
                  <br />
                </span>
                <span>
                  당류 (g)
                  <br />
                </span>
                <span>카페인 (mg)</span>
              </div>
              <div className="measure-right">
                <span className="measure">
                  20
                  <br />
                </span>
                <span className="measure">
                  10
                  <br />
                </span>
                <span className="measure">245</span>
              </div>
            </div>

            <div className="allergic">알레르기 유발 요인: 우유</div>
            <Review />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Detail;
