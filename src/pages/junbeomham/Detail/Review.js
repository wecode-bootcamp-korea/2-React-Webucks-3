import React, { Component } from 'react';

import LikeBtn from '../../../components/LikeBtn/LikeBtn';

import './Review.scss';

class Review extends Component {
  render() {
    const { userId, text, isLiked, handleDelReviewBtn, isReviewLiked } =
      this.props;
    return (
      <li>
        <dl>
          <dt>{userId}</dt>
          <dd>{text}</dd>
          <LikeBtn
            whoseBtn="review"
            userId={userId}
            handler={isReviewLiked}
            isLiked={isLiked}
          />
          <button
            className="del-btn"
            onClick={() => handleDelReviewBtn(userId)}
          >
            삭제
          </button>
        </dl>
      </li>
    );
  }
}

export default Review;
