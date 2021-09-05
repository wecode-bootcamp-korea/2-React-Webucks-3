import React, { Component } from 'react';
import Review from './Review/Review';
import './ReviewList.scss';

export default class ReviewList extends Component {
  constructor() {
    super();
    this.refUserId = React.createRef();
    this.state = {
      reviewList: [
        {
          userId: 'id1',
          reviewText: 'review 111111',
          isHeartClicked: false,
        },
        {
          userId: 'id22',
          reviewText: 'review 22',
          isHeartClicked: true,
        },
        {
          userId: 'id333',
          reviewText: 'review 333333333333333333333333',
          isHeartClicked: false,
        },
      ],
    };
  }

  reviewInputKeyUp = event => {
    if (event.key === 'Enter') {
      this.state.reviewList.push({
        userId: this.refUserId.current.value,
        reviewText: event.target.value,
        isHeartClicked: false,
      });

      this.setState({
        reviewList: this.state.reviewList,
      });

      this.refUserId.current.value = '';
      event.target.value = '';
    }
  };

  // clickHeartIcon = () => {

  // };

  render() {
    return (
      <section className="ReviewList">
        <div className="top">리뷰</div>
        <div className="mid">
          {this.state.reviewList.map(reviewInfo => {
            return (
              <Review
                userId={reviewInfo.userId}
                reviewText={reviewInfo.reviewText}
                isHeartClicked={reviewInfo.isHeartClicked}
              />
            );
          })}
        </div>
        <div className="bottom">
          <input
            className="userId"
            type="text"
            placeholder="아이디를 입력해주세요."
            ref={this.refUserId}
          />
          <input
            className="reviewText"
            type="text"
            placeholder="리뷰를 입력해주세요."
            onKeyUp={this.reviewInputKeyUp}
          />
        </div>
      </section>
    );
  }
}
