import React, { Component } from 'react';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <>
        <section class="menu-bar">
          <a class="logo" href="./coffeeList.html">
            WeBucks
          </a>
          <a class="btn coffee" href="">
            COFFEE
          </a>
          <a class="btn menu" href="">
            MENU
          </a>
          <a class="btn store" href="">
            STORE
          </a>
          <a class="btn new" href="">
            WHAT'S NEW
          </a>
        </section>

        <section class="sec-top">
          <p class="coffee-name">콜드 브루</p>
          <p class="menu-route">
            홈 `&gt;` MENU `&gt;` 음료 `&gt;` 콜드 브루 `&gt;` 제주 비자림 콜드
            브루
          </p>
        </section>

        <section class="sec-mid">
          <section class="sec-left">
            <img
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
              alt="제주 비자림 콜드 브루"
            />
          </section>
          <section class="sec-right">
            {/* <!-- name --> */}
            <section style="border-bottom: 3px solid black;">
              <p style="background-color: burlywood">제주 비자림 콜드 브루</p>
              <p style="background-color: burlywood">Jeju Forest Cold Brew</p>
              <i class="far fa-heart fa-2x"></i>
              <i class="fas fa-heart fa-2x"></i>
            </section>
            {/* <!-- description --> */}
            <section>
              <p style="background-color: burlywood">
                [제주지역 한정음료] 제주 천년의 숲 비자림을 연상시키는
                <br />
                음료로 제주에서 유기농 말차로 만든
                <br />
                파우더와 Cold Brew를 활용한 음료.
              </p>
            </section>
            {/* <!-- nutrition --> */}
            <section style="display: flex; justify-content: space-between; border-top: 1px solid lightgray; border-bottom: 1px solid lightgray; margin-bottom: 10px;">
              <p>제품 영양 정보</p>
              <p>Grande(그란데) / 473ml (16 fl oz)</p>
            </section>
            {/* <!-- nutrition detail --> */}
            <section style="display: flex; justify-content: space-between;">
              <section
                class="left"
                style="width: 50%; display: flex; flex-direction: column; border-right: 1px dotted gray; padding-right: 7px;"
              >
                <section style="display: flex; justify-content: space-between; padding-top: 5px;">
                  <span>1회 제공량 (kcal)</span>
                  <span>340</span>
                </section>
                <section style="display: flex; justify-content: space-between;">
                  <span>포화지방 (g)</span>
                  <span>8</span>
                </section>
                <section style="display: flex; justify-content: space-between; padding-bottom: 10px;">
                  <span>단백질 (g)</span>
                  <span>10</span>
                </section>
                <section></section>
              </section>
              <section
                class="right"
                style="width: 50%; display: flex; flex-direction: column; padding-left: 7px;"
              >
                <section style="display: flex; justify-content: space-between; padding-top: 5px;">
                  <span>나트륨 (mg)</span>
                  <span>115</span>
                </section>
                <section style="display: flex; justify-content: space-between;">
                  <span>당류 (g)</span>
                  <span>44</span>
                </section>
                <section style="display: flex; justify-content: space-between; padding-bottom: 10px;">
                  <span>카페인 (mg)</span>
                  <span>105</span>
                </section>
              </section>
            </section>
            {/* <!-- allergy --> */}
            <section style="background-color: #EFEFEF;">
              <p style="margin: 0; padding: 10px; font-size: 13px;">
                알레르기 유발 요인 : 없음
              </p>
            </section>
            {/* <!-- review --> */}
            <section class="review">
              <section class="title">
                <p style="border-bottom: 1px solid lightgray; padding-bottom: 5px;">
                  리뷰
                </p>
              </section>
              <section class="review-list">
                <p style="font-size: 13px;">
                  아직 리뷰가 없습니다. 첫 번째 리뷰를 작성해주세요 :)
                </p>
              </section>
              <section class="input">
                {/* <!-- 질문 input width 100% 주면 왜 넘어가지? --> */}
                <input
                  type="text"
                  placeholder="리뷰를 입력해주세요."
                  style="width: 100%; border: none; padding: 5px 0 5px 10px; background-color: #EFEFEF;"
                />
              </section>
            </section>
          </section>
        </section>

        {/* <!-- footer --> */}
        <footer style="position: absolute; bottom: 50px; width: 100%; background-color: yellowgreen;">
          123123
        </footer>
      </>
    );
  }
}

export default Detail;
