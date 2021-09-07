import React, { Component } from 'react';

import LikeBtn from '../../../components/LikeBtn/LikeBtn';

import './Review.scss';

class Review extends Component {
  render() {
    const { userId, text, handleDelReviewBtn } = this.props;
    return (
      <li>
        <dl>
          <dt>{userId}</dt>
          <dd>{text}</dd>
          <LikeBtn />
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
