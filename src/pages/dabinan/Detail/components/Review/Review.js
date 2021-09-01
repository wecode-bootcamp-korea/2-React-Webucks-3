import React, { Component } from 'react';
import LikeButton from '../../../components/LikeButton/LikeButton';
import './Review.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

class Review extends Component {
  removeReview = id => {
    this.props.removeReview(this.props.id);
  };
  render() {
    return (
      <>
        <li>
          <p>{this.props.value}</p>
          <LikeButton className="commentLikeButton" />
          <i onClick={this.removeReview}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </i>
        </li>
      </>
    );
  }
}

export default Review;
