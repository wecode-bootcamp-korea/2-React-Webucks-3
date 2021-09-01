import React, { Component } from 'react';

import './Detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import TopNav from '../../../components/Nav/Nav';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { isLikeClicked: false };
    this.handleLikeBtnColor = this.handleLikeBtnColor.bind(this);
  }

  handleLikeBtnColor = event => {
    this.setState({ isLikeClicked: !this.state.isLikeClicked });
  };

  render() {
    return (
      <div className="Detail">
        <TopNav />
        <section className="detail-section">
          <article>
            <div className="detail-category">
              <h2 className="category-title">콜드 브루</h2>
              <ul>
                <li>
                  <a className="topMenu" href="#">
                    홈
                  </a>
                </li>
                <li>
                  <img
                    alt="arrow"
                    src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
                  />
                </li>
                <li>
                  <a className="topMenu" href="#">
                    MENU
                  </a>
                </li>
                <li>
                  <img
                    alt="arrow"
                    src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
                  />
                </li>
                <li>
                  <a className="topMenu" href="#">
                    음료
                  </a>
                </li>
                <li>
                  <img
                    alt="arrow"
                    src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
                  />
                </li>
                <li>
                  <a className="topMenu" href="#">
                    콜드 브루
                  </a>
                </li>
                <li>
                  <img
                    alt="arrow"
                    src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
                  />
                </li>
                <li>
                  <a className="currentMenu" href="#">
                    시그니처 더 블랙 콜드 브루
                  </a>
                </li>
              </ul>
            </div>
            <div className="detail-content">
              <div className="detail-img-wrap">
                <img
                  alt="signatue the black cold brew"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346334.jpg"
                />
              </div>
              <div className="detail-text-wrap">
                <div className="detail-text">
                  <h3 className="product-name-kr">
                    시그니처 더 블랙 콜드 브루
                    <br />
                    <span className="product-name-en">
                      Signature The Black Cold Brew
                    </span>
                  </h3>
                  <div className="like-btn-wrap">
                    <button
                      className={
                        this.state.isLikeClicked
                          ? 'like-wrap clicked'
                          : 'like-wrap'
                      }
                      id="product-like"
                      onClick={this.handleLikeBtnColor}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                  <p className="product-description">
                    콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여
                    부드럽고 진한 풍미의 콜드브루를 딜리버리로 원하는 곳에서
                    편하게 즐겨보세요 (전용 리유저블 보틀 /500ml)
                  </p>
                </div>
                <div className="product-info">
                  <div className="product-info-head">
                    <p className="info-head-text">제품 영양 정보</p>
                    <p className="info-head-text">
                      Bottle(보틀) / 500ml (17 fl oz)
                    </p>
                  </div>
                  <div className="product-info-content">
                    <ul>
                      <li>
                        <dl>
                          <dt>1회 제공량 (kcal)</dt>
                          <dd>25</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>포화지방 (g)</dt>
                          <dd>0</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>단백질 (g)</dt>
                          <dd>0</dd>
                        </dl>
                      </li>
                    </ul>
                    <div className="dotted-border"></div>
                    <ul className="second-info">
                      <li>
                        <dl>
                          <dt>나트륨 (mg)</dt>
                          <dd>50</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>당류 (g)</dt>
                          <dd>0</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>카페인 (mg)</dt>
                          <dd>680</dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                  <div className="allergens-wrap">
                    <p>알레르기 유발 요인 : 없음</p>
                  </div>
                </div>
                <div className="detail-review">
                  <h2 className="category-title review-title">리뷰</h2>
                  <ul className="review-list">
                    <li>
                      <dl>
                        <dt>coffee_lover</dt>
                        <dd>너무 맛있어요!</dd>
                        <div className="review-like-btn-wrap">
                          <button className="like-wrap" id="review-like">
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                        </div>
                        <button className="del-btn">삭제</button>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>coldBrewMan</dt>
                        <dd>콜드 브루는 커피 중의 커피다.</dd>
                        <div className="review-like-btn-wrap">
                          <button className="like-wrap" id="review-like">
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                        </div>
                        <button className="del-btn">삭제</button>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dt>if_dead</dt>
                        <dd>얼어 죽어도 콜드 브루!!</dd>
                        <div className="review-like-btn-wrap">
                          <button className="like-wrap" id="review-like">
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                        </div>
                        <button className="del-btn">삭제</button>
                      </dl>
                    </li>
                  </ul>
                  <div className="review-input-wrap">
                    <input
                      className="review-input"
                      placeholder="리뷰를 입력해주세요."
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        <footer>
          <div className="footer-menus">
            <ul>
              <li className="footer-menu-title">COMPANY</li>
              <li className="footer-menu-content">
                <a href="#">한눈에 보기</a>
              </li>
              <li className="footer-menu-content">
                <a href="#">위벅스 사명</a>
              </li>
              <li className="footer-menu-content">
                <a href="#">위벅스 소개</a>
              </li>
              <li className="footer-menu-content">
                <a href="#">국내 뉴스룸</a>
              </li>
              <li className="footer-menu-content">
                <a href="#">세계의 위벅스</a>
              </li>
              <li className="footer-menu-content">
                <a href="#">글로벌 뉴스룸</a>
              </li>
            </ul>
            <ul>
              <li className="footer-menu-title">CORPORATE SALES</li>
              <li className="footer-menu-content">
                <a href="#">단체 및 기업 구매 안내</a>
              </li>
            </ul>
            <ul>
              <li className="footer-menu-title">PARTNERSHIP</li>
              <li className="footer-menu-content">
                <a href="#">신규 입점 제의</a>
              </li>
              <li className="footer-menu-content">
                <a href="#">협력 고객사 등록 신청</a>
              </li>
            </ul>
            <ul>
              <li className="footer-menu-title">ONLINE COMMUNITY</li>
              <li className="footer-menu-content">
                <a href="#">페이스북</a>
              </li>
              <li className="footer-menu-content">
                <a href="#">트위터</a>
              </li>
              <li className="footer-menu-content">
                <a href="#">유튜브</a>
              </li>
              <li className="footer-menu-content">
                <a href="#">블로그</a>
              </li>
              <li className="footer-menu-content">
                <a href="#">인스타그램</a>
              </li>
            </ul>
            <ul>
              <li className="footer-menu-title">RECRUIT</li>
              <li className="footer-menu-content">
                <a href="#">채용 소개</a>
              </li>
              <li className="footer-menu-content">
                <a href="#">채용 지원하기</a>
              </li>
            </ul>
            <ul>
              <li className="footer-menu-title">WEBUCKS</li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Detail;
