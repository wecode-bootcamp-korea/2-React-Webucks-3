import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import './Review.scss';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = { isLikeBtnClicked: false };
    this.handleLikeBtnColor = this.handleLikeBtnColor.bind(this);
  }

  handleLikeBtnColor = () => {
    const { isLikeBtnClicked } = this.state;
    this.setState({ isLikeBtnClicked: !isLikeBtnClicked });
  };

  render() {
    const { handleLikeBtnColor } = this;
    const { isLikeBtnClicked } = this.state;
    const { userId, text, handleDelReviewBtn } = this.props;
    return (
      <li>
        <dl>
          <dt>{userId}</dt>
          <dd>{text}</dd>
          <div className="review-like-btn-wrap">
            <button
              className={
                isLikeBtnClicked ? 'review-like clicked' : 'review-like'
              }
              onClick={handleLikeBtnColor}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
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
