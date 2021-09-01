import React, { Component } from 'react';
import TopNav from '../../../components/Nav/Nav';
import './List.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class List extends Component {
  render() {
    return (
      <div className="listContainer">
        <TopNav />
        <section className="typeOfCoffeeWrap">
          <div className="coffeeTitleWrap">
            <h2 className="coffeeTitle">콜드 브루 커피</h2>
            <img
              src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
              alt="coffee Icon"
              className="coffeeIcon"
            />
            <h4 className="coffeeSubTitle">
              디카페인 에스프레소 샷 추가 기능(일부 음료 제외)
            </h4>
          </div>
          <div className="coffeeTable">
            <div className="coffeeDetailWrap">
              <div className="coffeeImgWrap">
                <img
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
                  alt="나이트로 바닐라 크림"
                  className="coffeeImg"
                />
              </div>
              <div className="coffeeNameWrap">
                <p className="coffeeName">나이트로 바닐라 크림</p>
                <FontAwesomeIcon
                  className="heartBtn"
                  id="heartBtn1"
                  icon={faHeart}
                />
              </div>
            </div>
            <div className="coffeeDetailWrap">
              <div className="coffeeImgWrap">
                <img
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
                  alt="나이트로 콜드 브루"
                  className="coffeeImg"
                />
              </div>
              <div className="coffeeNameWrap">
                <p className="coffeeName">나이트로 콜드 브루</p>
                <FontAwesomeIcon
                  className="heartBtn"
                  id="heartBtn2"
                  icon={faHeart}
                />
              </div>
            </div>
            <div className="coffeeDetailWrap">
              <div className="coffeeImgWrap">
                <img
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
                  alt="돌체 콜드 브루"
                  className="coffeeImg"
                />
              </div>
              <div className="coffeeNameWrap">
                <p className="coffeeName">돌체 콜드 브루</p>
                <FontAwesomeIcon
                  className="heartBtn"
                  id="heartBtn3"
                  icon={faHeart}
                />
              </div>
            </div>
            <div className="coffeeDetailWrap">
              <div className="coffeeImgWrap">
                <img
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg"
                  alt="벨벳 다크 모카 나이트로"
                  className="coffeeImg"
                />
              </div>
              <div className="coffeeNameWrap">
                <p className="coffeeName">벨벳 다크 모카 나이트로</p>
                <FontAwesomeIcon
                  className="heartBtn"
                  id="heartBtn4"
                  icon={faHeart}
                />
              </div>
            </div>
            <div className="coffeeDetailWrap">
              <div className="coffeeImgWrap">
                <img
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg"
                  alt="바닐라 크림 콜드 브루"
                  className="coffeeImg"
                />
              </div>
              <div className="coffeeNameWrap">
                <p className="coffeeName">바닐라 크림 콜드 브루</p>
                <FontAwesomeIcon
                  className="heartBtn"
                  id="heartBtn5"
                  icon={faHeart}
                />
              </div>
            </div>
            <div className="coffeeDetailWrap">
              <div className="coffeeImgWrap">
                <img
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
                  alt="제주 비자림 콜드 브루"
                  className="coffeeImg"
                />
              </div>
              <div className="coffeeNameWrap">
                <p className="coffeeName">제주 비자림 콜드 브루</p>
                <FontAwesomeIcon
                  className="heartBtn"
                  id="heartBtn6"
                  icon={faHeart}
                />
              </div>
            </div>
            <div className="coffeeDetailWrap">
              <div className="coffeeImgWrap">
                <img
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"
                  alt="콜드 브루"
                  className="coffeeImg"
                />
              </div>
              <div className="coffeeNameWrap">
                <p className="coffeeName">콜드 브루</p>
                <FontAwesomeIcon
                  className="heartBtn"
                  id="heartBtn7"
                  icon={faHeart}
                />
              </div>
            </div>
            <div className="coffeeDetailWrap">
              <div className="coffeeImgWrap">
                <img
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"
                  alt="콜드 브루 몰트"
                  className="coffeeImg"
                />
              </div>
              <div className="coffeeNameWrap">
                <p className="coffeeName">콜드 브루 몰트</p>
                <FontAwesomeIcon
                  className="heartBtn"
                  id="heartBtn8"
                  icon={faHeart}
                />
              </div>
            </div>
            <div className="coffeeDetailWrap">
              <div className="coffeeImgWrap">
                <img
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg"
                  alt="콜드 브루 오트 라떼"
                  className="coffeeImg"
                />
              </div>
              <div className="coffeeNameWrap">
                <p className="coffeeName">콜드 브루 오트 라떼</p>
                <FontAwesomeIcon
                  className="heartBtn"
                  id="heartBtn9"
                  icon={faHeart}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="typeOfCoffeeWrap">
          <div className="coffeeTitleWrap">
            <h2 className="coffeeTitle">브루드 커피</h2>
            <img
              src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
              alt="coffee icon"
              className="coffeeIcon"
            />
            <h4 className="coffeeSubTitle">
              디카페인 에스프레소 샷 추가 기능(일부 음료 제외)
            </h4>
          </div>

          <div className="coffeeTable">
            <div className="coffeeDetailWrap">
              <div className="coffeeImgWrap">
                <img
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg"
                  alt="콜드 브루 플로트"
                  className="coffeeImg"
                />
              </div>
              <div className="coffeeNameWrap">
                <p className="coffeeName">콜드 브루 플로트</p>
                <FontAwesomeIcon
                  className="heartBtn"
                  id="heartBtn10"
                  icon={faHeart}
                />
              </div>
            </div>
            <div className="coffeeDetailWrap">
              <div className="coffeeImgWrap">
                <img
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg"
                  alt="프렌치 애플 타르트 나이트로"
                  className="coffeeImg"
                />
              </div>
              <div className="coffeeNameWrap">
                <p className="coffeeName">프렌치 애플 타르트 나이트로</p>
                <FontAwesomeIcon
                  className="heartBtn"
                  id="heartBtn1"
                  icon={faHeart}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default List;
