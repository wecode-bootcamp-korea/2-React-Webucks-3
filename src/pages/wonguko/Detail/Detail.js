import React, { Component } from 'react';
import TopNav from '../../../components/Nav/TopNav';
import './Detail.scss';
import HeartBtn from '../../../components/Detail/HeartBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

class Detail extends Component {
  render() {
    return (
      <div className="detailContainer">
        <TopNav />
        <div className="productWrap">
          <header className="productTitle">콜드 브루</header>
          <h4 className="productAddress">
            홈 {'>'} Menu {'>'} 음료 {'>'} 에스프레소 {'>'} 화이트 초콜렛 모카
          </h4>
          <section className="productDetailWrap">
            <div className="imgWrap">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[128192]_20210415155639276.jpg"
                alt="white chocolate mocha"
                className="coffeeImage"
              />
            </div>
            <article className="productMainContents">
              <div className="productDetailHeadWrap">
                <div className="productDetailTitleWrap">
                  <header className="productDetailTitle">
                    화이트 초콜릿 모카
                  </header>
                  <h4 className="productDetailSubTitle">
                    White chocolate Mocha
                  </h4>
                  <HeartBtn />
                </div>
                <hr className="headLine" />
                <p className="productExplanation">
                  달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀
                  밀크와 섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한
                  에스프레소가 부드럽게 어우러진 커피
                </p>
              </div>
              <hr className="line" />
              <div className="nutrientHeadWrap">
                <p className="nutrientHead">제품 영양 정보</p>
                <p className="standardInfo">Tall(톨) / 355ml(12fl oz)</p>
              </div>
              <hr className="line" />
              <div className="nutrientBodyWrap">
                <div className="nutrientBodyLeftWrap">
                  <div className="nutrientWrap">
                    <p className="nutrientDetail">1회 제공량(kcal)</p>
                    <p className="nutrientDetail">345</p>
                  </div>
                  <div className="nutrientWrap">
                    <p className="nutrientDetail">포화지방(g)</p>
                    <p className="nutrientDetail">11</p>
                  </div>
                  <div className="nutrientWrap">
                    <p className="nutrientDetail">단백질(g)</p>
                    <p className="nutrientDetail">11</p>
                  </div>
                </div>
                <div className="nutrientBodyRightWrap">
                  <div className="nutrientWrap">
                    <p className="nutrientDetail">나트륨(mg)</p>
                    <p className="nutrientDetail">150</p>
                  </div>
                  <div className="nutrientWrap">
                    <p className="nutrientDetail">당류(g)</p>
                    <p className="nutrientDetail">35</p>
                  </div>
                  <div className="nutrientWrap">
                    <p className="nutrientDetail">카페인(mg)</p>
                    <p className="nutrientDetail">75</p>
                  </div>
                </div>
              </div>
              <div className="cautionInfoWrap">
                <p className="nutrientDetail">알레르기 유발요인: 우유</p>
              </div>

              <div className="reviewTitle">리뷰</div>
              <hr className="line" />
              <div className="reviewWrap">
                <div className="reviewBox">
                  <div className="reviewDetailWrap">
                    <p className="reviewer">coffee_lover</p>
                    <p className="reviewDetail">너무 맛있어요</p>
                    <div className="iconWrap">
                      <FontAwesomeIcon
                        className="likeReview"
                        icon={faThumbsUp}
                      />
                      <FontAwesomeIcon
                        className="deleteBtn"
                        icon={faTrashAlt}
                      />
                    </div>
                  </div>
                  <div className="reviewDetailWrap">
                    <p className="reviewer">CHOCOJ</p>
                    <p className="reviewDetail">
                      오늘도 화이트 초콜릿 모카를 마시러 갑니다.
                    </p>
                    <div className="iconWrap">
                      <FontAwesomeIcon
                        className="likeReview"
                        icon={faThumbsUp}
                      />
                      <FontAwesomeIcon
                        className="deleteBtn"
                        icon={faTrashAlt}
                      />
                    </div>
                  </div>
                  <div className="reviewDetailWrap">
                    <p className="reviewer">legend_dev</p>
                    <p className="reviewDetail">
                      진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿
                      모카는 전설이다.
                    </p>
                    <div className="iconWrap">
                      <FontAwesomeIcon
                        className="likeReview"
                        icon={faThumbsUp}
                      />
                      <FontAwesomeIcon
                        className="deleteBtn"
                        icon={faTrashAlt}
                      />
                    </div>
                  </div>
                </div>
                <div className="commentWrap">
                  <input
                    type="text"
                    placeholder="ID를 입력해주세요."
                    className="inputReviewId"
                  />
                  <input
                    type="text"
                    placeholder="리뷰를 입력해주세요."
                    className="inputReviewText"
                  />
                  <button className="ReviewSubmit">입력</button>
                </div>
              </div>
            </article>
          </section>
        </div>
        <footer className="detailFooter">
          <ul className="categoryWrap">
            <li>
              <a href="#none" className="categoryHead">
                COMPANY
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                한눈에 보기
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                스타벅스 사명
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                스타벅스 소개
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                국내 뉴스룸
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                세계의 스타벅스
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                글로벌 뉴스룸
              </a>
            </li>
          </ul>
          <ul className="categoryWrap">
            <li>
              <a href="#none" className="categoryHead">
                CORPORATE SALES
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                단체 및 기업 구매 안내
              </a>
            </li>
          </ul>
          <ul className="categoryWrap">
            <li>
              <a href="#none" className="categoryHead">
                PARTNERSHIP
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                신규 입점 제의
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                협력 고객사 등록신청
              </a>
            </li>
          </ul>
          <ul className="categoryWrap">
            <li>
              <a href="#none" className="categoryHead">
                ONLINE COMMUNITY
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                페이스북
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                트위터
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                유튜브
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                블로그
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                인스타그램
              </a>
            </li>
          </ul>
          <ul className="categoryWrap">
            <li>
              <a href="#none" className="categoryHead">
                RECRUIT
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                채용 소개
              </a>
            </li>
            <li>
              <a href="#none" className="category">
                채용 지원하기
              </a>
            </li>
          </ul>
          <ul className="categoryWrap">
            <li>
              <a href="#none" className="categoryHead">
                WEBUCKS
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Detail;
