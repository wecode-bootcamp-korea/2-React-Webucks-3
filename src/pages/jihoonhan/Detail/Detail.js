/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Detail.scss';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TopNav from '../../../components/Nav/TopNav';

class Detail extends Component {
  render() {
    return (
      <>
        <TopNav />

        <div className="nameColdbrew">
          <span>콜드 브루</span>
        </div>
        <div class="arrow-nav">
          <nav>
            <ul>
              <li>
                <a>아이스 커피</a>
              </li>
              <li>></li>
              <li>
                <a>브루드 커피</a>
              </li>
              <li>></li>
              <li>
                <a>음료</a>
              </li>
              <li>></li>
              <li>
                <a>MENU</a>
              </li>
              <li>></li>
              <li>
                <a>홈</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="container">
          <img
            alt="나이트로바닐라크림"
            src="/images/나이트로바닐라크림.jpg"
          />
          <div className="table">
            <div className="coffename">
              <span className="kor">나이트로 바닐라 크림</span>
              <span className="eng">
                <br />
                Nitro vanilla Cream
              </span>
              <a className="heart">
                <FontAwesomeIcon icon={faHeart} className="far fa-heart" />
              </a>
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
            <div className="review">
              <p>리뷰</p>
            </div>

            <div className="comments">
              <div className="commentRow">
                <span className="username">cofee_lover</span>
                <span className="comment">너무 맛있어요!</span>
              </div>
              <div className="commentRow">
                <span className="username">CHOCO7</span>
                <span className="comment">
                  오늘도 화이트 초콜릿 모카를 마시러 갑니다.
                </span>
              </div>
              <div className="commentRow">
                <span className="username">legend_dev</span>
                <span className="comment">
                  진짜 화이트 초콜릿 모카는 전설이다.
                </span>
              </div>
            </div>
            <input
              className="newComment"
              placeholder="리뷰를 입력해주세요."
            ></input>
          </div>
        </div>

        <footer>
          <div className="footer">
            <div className="footerText">
              <span>COMPANY</span>
              <br />
              한눈에 보기
              <br />
              스타벅스 사명
              <br />
              스타벅스 소개
              <br />
              국내 뉴스룸
              <br />
              세계의 스타벅스
              <br />
              글로벌 뉴스룸
            </div>
            <div className="footerText">
              <span>CORPORATE SALES</span>
              <br />
              단체 및 기업 구매 안내
            </div>
            <div className="footerText">
              <span>PARTNERSHIP</span>
              <br />
              신규 입점 제의
              <br />
              협력 고객사 등록 신청
            </div>
            <div className="footerText">
              <span>ONLINE COMMUNITY</span>
              <br />
              페이스북
              <br />
              트위터
              <br />
              유튜브
              <br />
              블로그
              <br />
              인스타그램
            </div>
            <div className="footerText">
              <span>RECRUIT</span>
              <br />
              채용 소개
              <br />
              채용 지원하기
            </div>
            <div className="footerText">
              <span>WEBUCKS</span>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Detail;
