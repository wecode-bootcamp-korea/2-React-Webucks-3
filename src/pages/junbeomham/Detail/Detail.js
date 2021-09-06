import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import TopNav from '../../../components/Nav/Nav';
import TopMenuNav from './TopMenuNav';
import Review from './Review';
import Footer from '../../../components/Footer/Footer';

import MENU_LIST from './mockData/MenuListMockData';
import REVIEW_LIST_DATA from './mockData/ReviewListMockData';

import './Detail.scss';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLikeClicked: false,
      reviewList: [...REVIEW_LIST_DATA],
      reviewInputVal: '',
      testIdNum: 1,
    };

    this.handleLikeBtnColor = this.handleLikeBtnColor.bind(this);
    this.handleReviewInput = this.handleReviewInput.bind(this);
    this.getReviewInputVal = this.getReviewInputVal.bind(this);
  }

  handleLikeBtnColor = () => {
    const { isLikeClicked } = this.state;
    this.setState({ isLikeClicked: !isLikeClicked });
  };

  handleReviewInput = event => {
    const { key } = event;
    const { value } = event.target;
    const { testIdNum, reviewList } = this.state;

    this.setState({ reviewInputVal: value });

    if (key === 'Enter' && value !== '') {
      let newReview = {
        userId: 'test' + testIdNum,
        text: value,
      };
      const newReviewList = reviewList;
      newReviewList.push(newReview);

      this.setState({
        reviewInputVal: '',
        testIdNum: testIdNum + 1,
        reviewList: newReviewList,
      });
    }
  };

  getReviewInputVal = event => {
    const { value } = event.target;
    this.setState({ reviewInputVal: value });
    const reviewInputVal = this.state;
    return reviewInputVal;
  };

  render() {
    const { handleLikeBtnColor, handleReviewInput, getReviewInputVal } = this;
    const { isLikeClicked, reviewList, reviewInputVal } = this.state;

    let currentMenu;
    for (let menu of MENU_LIST) {
      if (menu.name === this.props.korName) {
        currentMenu = menu;
      }
    }

    console.log(this.props.id);

    return (
      <div className="Detail">
        <TopNav />
        <section className="detail-section">
          <article>
            <div className="detail-category">
              <h2 className="category-title">콜드 브루</h2>
              <div className="category-nav">
                <TopMenuNav {...currentMenu} />
              </div>
            </div>
            <div className="detail-content">
              <div className="detail-img-wrap">
                <img
                  alt="signatue the black cold brew"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346334.jpg"
                />
              </div>
              <div className="detail-text-wrap">
                <div className="detail-text">
                  <h3 className="product-name-kr">
                    {this.props.korName}
                    <br />
                    <span className="product-name-en">
                      {this.props.engName}
                    </span>
                  </h3>
                  <div className="like-btn-wrap">
                    <button
                      className={
                        isLikeClicked ? 'like-wrap clicked' : 'like-wrap'
                      }
                      id="product-like"
                      onClick={handleLikeBtnColor}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                  <p className="product-description">
                    {this.props.description}
                  </p>
                </div>
                <div className="product-info">
                  <div className="product-info-head">
                    <p className="info-head-text">제품 영양 정보</p>
                    <p className="info-head-text">
                      {this.props.size} / {this.props.literSize}ml (
                      {this.props.oz} fl oz)
                    </p>
                  </div>
                  <div className="product-info-content">
                    <ul>
                      <li>
                        <dl>
                          <dt>1회 제공량 (kcal)</dt>
                          <dd>{this.props.calories}</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>포화지방 (g)</dt>
                          <dd>{this.props.fat}</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>단백질 (g)</dt>
                          <dd>{this.props.protein}</dd>
                        </dl>
                      </li>
                    </ul>
                    <div className="dotted-border"></div>
                    <ul className="second-info">
                      <li>
                        <dl>
                          <dt>나트륨 (mg)</dt>
                          <dd>{this.props.sodium}</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>당류 (g)</dt>
                          <dd>{this.props.sugar}</dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>카페인 (mg)</dt>
                          <dd>{this.props.caffein}</dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                  <div className="allergens-wrap">
                    <p>알레르기 유발 요인 : {this.props.allergy}</p>
                  </div>
                </div>
                <div className="detail-review">
                  <h2 className="category-title review-title">리뷰</h2>
                  <ul className="review-list">
                    {reviewList.map(review => {
                      return (
                        <Review
                          key={review.userId}
                          userId={review.userId}
                          text={review.text}
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
        <Footer />
      </div>
    );
  }
}

export default Detail;
