import React, { Component } from 'react';

//import { getUrls } from '../api';

import TopMenuNav from './TopMenuNav';
import LikeBtn from '../../../components/LikeBtn/LikeBtn';
import Review from './Review';

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

    if (key === 'Enter' && value !== '') {
      let newReview = {
        userId: 'test' + this.testIdNum,
        text: value,
        isDeleted: false,
        isLiked: false,
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

  getNotDeletedReviews = () => {
    const { reviewList } = this.state;
    const notDelReviewList = [];
    for (let review of reviewList) {
      if (!review.isDeleted) {
        notDelReviewList.push(review);
      }
    }
    return notDelReviewList;
  };

  isProductLiked = isLiked => {
    const { product } = this.state;
    const updatedProduct = { ...product };
    updatedProduct.isLiked = isLiked;
    this.setState({ product: updatedProduct });
  };

  isReviewLiked = (userId, isLiked) => {
    const { reviewList } = this.state;
    const updatedReviewList = [...reviewList];
    for (let review of updatedReviewList) {
      if (userId === review.userId) {
        review.isLiked = isLiked;
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
    //////////////////////////////////////////////////////////////
    // const detailUrls = getUrls('detail');
    // const jsonKeys = detailUrls.keys();
    // Promise.all(
    //   detailUrls.values().map(url =>
    //     fetch(url)
    //       .then(res => res.json())
    //       .then(data => {})
    //   )
    // );
  }

  render() {
    const {
      handleReviewInput,
      getReviewInputVal,
      handleDelReviewBtn,
      getNotDeletedReviews,
      isProductLiked,
      isReviewLiked,
    } = this;
    const { product, menuList, reviewInputVal } = this.state;

    let currentMenu;
    for (let menu of menuList) {
      if (menu.name === product.name) {
        currentMenu = menu;
      }
    }

    return (
      <div className="Detail">
        {/* <TopNav /> */}
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
                  <LikeBtn
                    whoseBtn="product"
                    handler={isProductLiked}
                    isLiked={product.isLiked}
                  />
                  <p className="product-description">{product.summary}</p>
                </div>
                <div className="product-info">
                  <div className="product-info-head">
                    <p className="info-head-text">제품 영양 정보</p>
                    <p className="info-head-text">{product.servingSize}</p>
                  </div>
                  <div className="product-info-content">
                    <table>
                      <tbody>
                        <tr>
                          <td>1회 제공량 (kcal)</td>
                          <td className="align-right padding-right">
                            {product.kcal}
                          </td>
                          <td className="dashed-border">나트륨 (mg)</td>
                          <td className="align-right">{product.natrium}</td>
                        </tr>
                        <tr>
                          <td>포화지방 (g)</td>
                          <td className="align-right padding-right">
                            {product.fat}
                          </td>
                          <td className="dashed-border">당류 (g)</td>
                          <td className="align-right">{product.sugars}</td>
                        </tr>
                        <tr>
                          <td>단백질 (g)</td>
                          <td className="align-right padding-right">
                            {product.protein}
                          </td>
                          <td className="dashed-border">카페인 (mg)</td>
                          <td className="align-right">{product.caffeine}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="allergens-wrap">
                    <p>알레르기 유발 요인 : {product.allergen}</p>
                  </div>
                </div>
                <div className="detail-review">
                  <h2 className="category-title review-title">리뷰</h2>
                  <ul className="review-list">
                    {getNotDeletedReviews().map(review => {
                      return (
                        <Review
                          key={review.userId}
                          {...review}
                          isReviewLiked={isReviewLiked}
                          handleDelReviewBtn={handleDelReviewBtn}
                        />
                      );
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
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Detail;
