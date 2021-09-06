import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import './Review.scss';

class Review extends Component {
  render() {
    return (
      <li>
        <dl>
          <dt>{this.props.userId}</dt>
          <dd>{this.props.text}</dd>
          <div className="review-like-btn-wrap">
            <button className="like-wrap" id="review-like">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
          <button className="del-btn">삭제</button>
        </dl>
      </li>
    );
  }
}

export default Review;
