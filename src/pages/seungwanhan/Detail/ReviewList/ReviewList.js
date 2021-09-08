import React, { Component } from 'react';
import Review from './Review/Review';
import './ReviewList.scss';

export default class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [
        {
          uuid: 'key1',
          userId: 'janghyun',
          reviewText: '장현 리뷰 1등!!!',
          isHeartClicked: false,
        },
        {
          uuid: 'key2',
          userId: 'soheon',
          reviewText: '소헌도 리뷰 달았다ㅎㅎㅎㅎ',
          isHeartClicked: true,
        },
        {
          uuid: 'key3',
          userId: 'khkim',
          reviewText: 'hi im kh hahaha',
          isHeartClicked: false,
        },
      ],
    };
    this.refUserId = React.createRef();
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

  clickHeartIcon = uuid => {
    const newList = this.state.reviewList.map(el => {
      if (el.uuid === uuid) {
        el.isHeartClicked = !el.isHeartClicked;
        return el;
      } else {
        return el;
      }
    });
    this.setState({ reviewList: newList });
  };

  clickDeleteIcon = uuid => {
    const newList = this.state.reviewList.filter(el => el.uuid !== uuid);
    this.setState({ reviewList: newList });
  };

  render() {
    const { clickHeartIcon, clickDeleteIcon, reviewInputKeyUp } = this;
    return (
      <section className="ReviewList">
        <div className="reviewListTop">리뷰</div>
        <div className="reviewListMid">
          {this.state.reviewList.map(review => {
            return (
              <Review
                uuid={review.uuid}
                userId={review.userId}
                reviewText={review.reviewText}
                isHeartClicked={review.isHeartClicked}
                clickHeartIcon={clickHeartIcon}
                clickDeleteIcon={clickDeleteIcon}
              />
            );
          })}
        </div>
        <div className="reviewListBottom">
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
            onKeyUp={reviewInputKeyUp}
          />
        </div>
      </section>
    );
  }
}
