import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import './Review.scss';

export default class Review extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="Review">
        <span>{this.props.userId}</span>
        <span>{this.props.reviewText}</span>
        <span className="heartIcon" onClick={this.props.onClick}>
          <FontAwesomeIcon
            icon={this.props.isHeartClicked ? heartSolid : heartRegular}
          />
        </span>
      </div>
    );
  }
}
