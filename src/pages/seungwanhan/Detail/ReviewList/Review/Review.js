import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Review.scss';

export default class Review extends Component {
  render() {
    const {
      uuid,
      userId,
      reviewText,
      isHeartClicked,
      clickHeartIcon,
      clickDeleteIcon,
    } = this.props;

    return (
      <div className="Review">
        <span>{userId}</span>
        <span>{reviewText}</span>
        <FontAwesomeIcon
          className="heartIcon"
          icon={isHeartClicked ? heartSolid : heartRegular}
          onClick={() => clickHeartIcon(uuid)}
        />
        <FontAwesomeIcon
          className="deleteIcon"
          icon={faTimes}
          onClick={() => clickDeleteIcon(uuid)}
        />
      </div>
    );
  }
}
