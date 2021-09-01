import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './List.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import TopNav from '../../../components/Nav/Nav';

class List extends Component {
  render() {
    return (
      <div className="List">
        <TopNav />
        <section className="menu">
          <article>
            <section className="title-wrap">
              <p className="title">콜드 브루 커피</p>
              <img
                alt="decafe logo"
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
              />
              <p className="description">
                디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
              </p>
            </section>
            <section className="items-wrap">
              <dl>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <Link to="/detail-junbeom">
                        <img
                          alt="sinature the black cold brew"
                          src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg"
                        />
                      </Link>
                    </div>
                  </dt>
                  <dd>
                    시그니처 더 블랙 콜드 브루
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="icecream blending cold brew"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    아이스크림 블랜딩 콜드 브루
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="nitro vanilla cream"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    나이트로 바닐라 크림
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="nitro cold brew"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    나이트로 콜드 브루
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="dolce cold brew"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    돌체 콜드 브루
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="vanilla cream cold brew"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    바닐라 크림 콜드 브루
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="velvet dark mocha nitro"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    벨벳 다크 모카 나이트로
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="forest of kaya in Jeju cold brew"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    제주 비자림 콜드 브루
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="cold brew"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    콜드 브루
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="cold brew malt"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    콜드 브루 몰트
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="cold brew oat latte"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    콜드 브루 오트 라떼
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="cold brew float"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    콜드 브루 플로트
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="french apple tart nitro"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    프렌치 애플 타르트 나이트로
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
              </dl>
            </section>
          </article>

          <article>
            <section className="title-wrap">
              <p className="title">브루드 커피</p>
              <img
                alt="decafe logo"
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
              />
              <p className="description">
                디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
              </p>
            </section>
            <section className="items-wrap">
              <dl>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="ice coffee"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    아이스 커피
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
                <div className="item">
                  <dt className="img-wrap">
                    <div className="scale">
                      <img
                        alt="today cofee"
                        src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg"
                      />
                    </div>
                  </dt>
                  <dd>
                    오늘의 커피
                    <button className="like-wrap">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </dd>
                </div>
              </dl>
            </section>
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

export default List;
