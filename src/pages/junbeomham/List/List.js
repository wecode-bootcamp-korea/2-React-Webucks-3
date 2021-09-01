import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './List.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import TopNav from '../../../components/Nav/Nav';
import COFFEECARD_DATA from './mockData';

class CoffeeCard extends Component {
  render() {
    return (
      <div className="item">
        <dt className="img-wrap">
          <div className="scale">
            <Link to="/detail-junbeom">
              <img alt={this.props.name} src={this.props.img} />
            </Link>
          </div>
        </dt>
        <dd>
          {this.props.name}
          <button className="like-wrap">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </dd>
      </div>
    );
  }
}

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
                {COFFEECARD_DATA[0].map(cardData => {
                  return (
                    <CoffeeCard
                      key={cardData.id}
                      name={cardData.name}
                      img={cardData.img}
                    />
                  );
                })}
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
                {COFFEECARD_DATA[1].map(cardData => {
                  return (
                    <CoffeeCard
                      key={cardData.id}
                      name={cardData.name}
                      img={cardData.img}
                    />
                  );
                })}
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
