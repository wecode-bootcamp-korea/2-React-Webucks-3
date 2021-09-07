import React, { Component } from 'react';
import ReviewList from './ReviewList';
import HeartBtn from '../Shared/HeartBtn';
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
          products: data.data[0],
        });
      });
  }

  render() {
    return (
      <div className="productWrap">
        <header className="productTitle">{this.state.products.category}</header>
        <h4 className="productAddress">
          홈 {'>'} Menu {'>'} 음료 {'>'} 에스프레소 {'>'}{' '}
          {this.state.products.name}
        </h4>
        <section className="productDetailWrap">
          <div className="imgWrap">
            <img
              src={this.state.products.imgUrl}
              alt="white chocolate mocha"
              className="coffeeImage"
            />
          </div>
          <article className="productMainContents">
            <div className="productDetailHeadWrap">
              <div className="productDetailTitleWrap">
                <header className="productDetailTitle">
                  {this.state.products.name}
                </header>
                <h4 className="productDetailSubTitle">
                  {this.state.products.engName}
                </h4>
                <HeartBtn />
              </div>
              <hr className="headLine" />
              <p className="productExplanation">
                {this.state.products.summary}
              </p>
            </div>
            <hr className="line" />
            <div className="nutrientHeadWrap">
              <p className="nutrientHead">제품 영양 정보</p>
              <p className="standardInfo">{this.state.products.servingSize}</p>
            </div>
            <hr className="line" />
            <div className="nutrientBodyWrap">
              <div className="nutrientBodyLeftWrap">
                <div className="nutrientWrap">
                  <p className="nutrientDetail">1회 제공량(kcal)</p>
                  <p className="nutrientDetail">{this.state.products.kcal}</p>
                </div>
                <div className="nutrientWrap">
                  <p className="nutrientDetail">포화지방(g)</p>
                  <p className="nutrientDetail">{this.state.products.fat}</p>
                </div>
                <div className="nutrientWrap">
                  <p className="nutrientDetail">단백질(g)</p>
                  <p className="nutrientDetail">
                    {this.state.products.protein}
                  </p>
                </div>
              </div>
              <div className="nutrientBodyRightWrap">
                <div className="nutrientWrap">
                  <p className="nutrientDetail">나트륨(mg)</p>
                  <p className="nutrientDetail">
                    {this.state.products.natrium}
                  </p>
                </div>
                <div className="nutrientWrap">
                  <p className="nutrientDetail">당류(g)</p>
                  <p className="nutrientDetail">{this.state.products.sugars}</p>
                </div>
                <div className="nutrientWrap">
                  <p className="nutrientDetail">카페인(mg)</p>
                  <p className="nutrientDetail">
                    {this.state.products.caffeine}
                  </p>
                </div>
              </div>
            </div>
            <div className="cautionInfoWrap">
              <p className="nutrientDetail">{this.state.products.allergen}</p>
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
