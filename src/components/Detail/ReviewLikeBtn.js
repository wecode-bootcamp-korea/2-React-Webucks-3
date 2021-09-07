import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import './ReviewLikeBtn.scss';

class ReviewLikeBtn extends Component {
  constructor() {
    super();
    this.state = {
      isLikeReview: false,
    };
  }

  handleReviewLikeBtn = () => {
    this.setState({
      isLikeReview: !this.state.isLikeReview,
    });
  };

  render() {
    return (
      <>
        <FontAwesomeIcon
          className={
            this.state.isLikeReview ? 'likeReview active' : 'likeReview'
          }
          icon={faThumbsUp}
          onClick={this.handleReviewLikeBtn}
        />
      </>
    );
  }
}

export default ReviewLikeBtn;
