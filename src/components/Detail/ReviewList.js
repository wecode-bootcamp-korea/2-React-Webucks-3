import React, { Component } from 'react';
import './Review.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      reviewer: '',
      comment: '',
    };
  }

  render() {
    return (
      <div className="reviewBox">
        <div className="reviewDetailWrap">
          <p className="reviewer">{this.props.reviewer}</p>
          <p className="reviewDetail">{this.props.comment}</p>
          <div className="iconWrap">
            <FontAwesomeIcon className="likeReview" icon={faThumbsUp} />
            <FontAwesomeIcon className="deleteBtn" icon={faTrashAlt} />
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
