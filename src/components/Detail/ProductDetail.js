import React, { Component } from 'react';

//components
import ReviewList from './ReviewList';
import HeartBtn from '../Shared/HeartBtn';

// CSS
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/detailMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.data,
        });
        console.log(this.state.products);
      });
  }

  render() {
    return (
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
                <h4 className="productDetailSubTitle">White chocolate Mocha</h4>
                <HeartBtn />
              </div>
              <hr className="headLine" />
              <p className="productExplanation">
                달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
                섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
                부드럽게 어우러진 커피
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
            <form className="reviewWrap">
              <ReviewList />
            </form>
          </article>
        </section>
      </div>
    );
  }
}

export default ProductDetail;
