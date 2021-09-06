import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Review.scss';

export default class Review extends Component {
  render() {
    return (
      <div className="Review">
        <span>{this.props.userId}</span>
        <span>{this.props.reviewText}</span>
        <span className="heartIcon" onClick={this.props.clickHeartIcon}>
          <FontAwesomeIcon
            icon={this.props.isHeartClicked ? heartSolid : heartRegular}
          />
        </span>
        <span className="deleteIcon" onClick={this.props.clickDeleteIcon}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
    );
  }
}
