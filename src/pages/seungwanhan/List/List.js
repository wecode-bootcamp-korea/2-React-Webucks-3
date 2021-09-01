import React, { Component } from 'react';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="List">
        <div className="contentsWrapper">
          <nav className="menu">
            <a className="logo">WeBucks</a>
            <ul>
              <li>
                <a className="btn coffee" href="">
                  COFFEE
                </a>
              </li>
              <li>
                <a className="btn menu" href="">
                  MENU
                </a>
              </li>
              <li>
                <a className="btn store" href="">
                  STORE
                </a>
              </li>
              <li>
                <a className="btn new" href="">
                  WHAT'S NEW
                </a>
              </li>
            </ul>
          </nav>

          <main className="mainContents">
            <div className="conponent-ing">
              <section className="headline">
                <span>콜드 브루 커피</span>
                <span>
                  <img src="" alt="" />
                </span>
                <span className="addShot">
                  디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
                </span>
              </section>
              <section className="gridCoffeeInfo">
                <div>
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg"
                    alt="시그니처 더 블랙 콜드 브루"
                  />
                </div>
                <div>
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
                    alt="나이트로 콜드 브루"
                  />
                </div>
                <div>
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg"
                    alt="벨벳 다크 모카 나이트로"
                  />
                </div>
                <div>
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg"
                    alt="아이스크림 블렌딩 콜드 브루"
                  />
                </div>
                <div>
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
                    alt="돌체 콜드 브루"
                  />
                </div>
                <div>
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
                    alt="제주 비자림 콜드 브루"
                  />
                </div>
                <div>
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
                    alt="나이트로 바닐라 크림"
                  />
                </div>
                <div>
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg"
                    alt="바닐라 크림 콜드 브루"
                  />
                </div>
                <div>
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"
                    alt="콜드 브루"
                  />
                </div>
                <div>
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"
                    alt="콜드 브루 몰트"
                  />
                </div>
              </section>
            </div>

            <div className="component-ing">
              <section className="headline">
                <span>브루드 커피</span>
                <span>
                  <img src="" alt="" />
                </span>
                <span className="addShot">
                  디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
                </span>
              </section>
              <section className="gridCoffeeInfo">
                <div>
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg"
                    alt="아이스 커피"
                  />
                </div>
                <div>
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg"
                    alt="오늘의 커피"
                  />
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default List;
