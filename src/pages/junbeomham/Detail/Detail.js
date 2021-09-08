import React, { Component } from 'react';

import TopNav from '../../../components/TopNav/TopNav';
import TopMenuNav from './TopMenuNav';
import LikeBtn from '../../../components/LikeBtn/LikeBtn';
import Review from './Review';
import Footer from '../../../components/Footer/Footer';

import './Detail.scss';

class Detail extends Component {
  testIdNum = 1;

  constructor(props) {
    super(props);
    this.state = {
      product: {},
      reviewList: [],
      menuList: [],
      reviewInputVal: '',
    };
  }

  handleReviewInput = event => {
    const { key } = event;
    const { value } = event.target;
    const { reviewList } = this.state;

    this.setState({ reviewInputVal: value });

    if (key === 'Enter' && value !== '') {
      let newReview = {
        userId: 'test' + this.testIdNum,
        text: value,
        isDeleted: false,
      };
      const newReviewList = reviewList;
      newReviewList.push(newReview);

      this.setState({
        reviewInputVal: '',
        reviewList: newReviewList,
      });
      this.testIdNum++;
    }
  };

  getReviewInputVal = event => {
    const { value } = event.target;
    this.setState({ reviewInputVal: value });
    const { reviewInputVal } = this.state;
    return reviewInputVal;
  };

  handleDelReviewBtn = userId => {
    const { reviewList } = this.state;
    const updatedReviewList = [...reviewList];
    for (let review of updatedReviewList) {
      if (userId === review.userId) {
        review.isDeleted = true;
      }
    }
    this.setState({ reviewList: updatedReviewList });
  };

  componentDidMount() {
    Promise.all([
      fetch('http://localhost:3000/data/detailMockData.json'),
      fetch('http://localhost:3000/data/reviewListMockData.json'),
      fetch('http://localhost:3000/data/menuListMockData.json'),
    ])
      .then(([res1, res2, res3]) =>
        Promise.all([res1.json(), res2.json(), res3.json()])
      )
      .then(([data1, data2, data3]) => {
        this.setState({
          product: data1.data[0],
          reviewList: data2.reviews,
          menuList: data3.menus,
        });
      });
  }

  render() {
    const { handleReviewInput, getReviewInputVal, handleDelReviewBtn } = this;
    const { product, reviewList, menuList, reviewInputVal } = this.state;

    let currentMenu;
    for (let menu of menuList) {
      if (menu.name === product.name) {
        currentMenu = menu;
      }
    }

    return (
      <div className="Detail">
        <TopNav />
        <section className="detail-section">
          <article>
            <div className="detail-category">
              <h2 className="category-title">{product.catecory}</h2>
              <div className="category-nav">
                <TopMenuNav {...currentMenu} menuList={menuList} />
              </div>
            </div>
            <div className="detail-content">
              <div className="detail-img-wrap">
                <img alt={product.name} src={product.imgUrl} />
              </div>
              <div className="detail-text-wrap">
                <div className="detail-text">
                  <h3 className="product-name-kr">
                    {product.name}
                    <br />
                    <span className="product-name-en">{product.engName}</span>
                  </h3>
                  <LikeBtn />
                  <p className="product-description">{product.summary}</p>
                </div>
                <div className="product-info">
                  <div className="product-info-head">
                    <p className="info-head-text">제품 영양 정보</p>
                    <p className="info-head-text">{product.servingSize}</p>
                  </div>
                  <div className="product-info-content">
                    <ul>
                      <li>
                        <dl>
                          <dt>1회 제공량 (kcal)</dt>
                          <dd>{product.kcal}</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>포화지방 (g)</dt>
                          <dd>{product.fat}</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>단백질 (g)</dt>
                          <dd>{product.protein}</dd>
                        </dl>
                      </li>
                    </ul>
                    <div className="dotted-border"></div>
                    <ul className="second-info">
                      <li>
                        <dl>
                          <dt>나트륨 (mg)</dt>
                          <dd>{product.natrium}</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>당류 (g)</dt>
                          <dd>{product.sugars}</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>카페인 (mg)</dt>
                          <dd>{product.caffeine}</dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                  <div className="allergens-wrap">
                    <p>알레르기 유발 요인 : {product.allergen}</p>
                  </div>
                </div>
                <div className="detail-review">
                  <h2 className="category-title review-title">리뷰</h2>
                  <ul className="review-list">
                    {reviewList.map(review => {
                      if (!review.isDeleted) {
                        return (
                          <Review
                            key={review.userId}
                            {...review}
                            handleDelReviewBtn={handleDelReviewBtn}
                          />
                        );
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                  <div className="review-input-wrap">
                    <input
                      className="review-input"
                      placeholder="리뷰를 입력해주세요."
                      type="text"
                      value={reviewInputVal}
                      onChange={getReviewInputVal}
                      onKeyPress={handleReviewInput}
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Detail;
