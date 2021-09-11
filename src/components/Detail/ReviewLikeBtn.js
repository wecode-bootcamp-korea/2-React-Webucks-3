import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import './ReviewLikeBtn.scss';

class ReviewLikeBtn extends Component {
  render() {
    return (
      <>
        <FontAwesomeIcon
          id={this.props.id}
          className={
            this.props.isLikeReview ? 'likeReview active' : 'likeReview'
          }
          icon={faThumbsUp}
          onClick={e => this.props.handleReviewLikeBtn(e)}
        />
      </>
    );
  }
}

export default ReviewLikeBtn;
