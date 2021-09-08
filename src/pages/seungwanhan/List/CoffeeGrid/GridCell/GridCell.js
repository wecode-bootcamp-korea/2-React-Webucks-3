import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import './GridCell.scss';

export default class GridCell extends Component {
  render() {
    const { uuid, imgUrl, title, isHeartClicked, clickHeartIcon } = this.props;
    return (
      <div className="GridCell">
        <div className="coffeeImgWrapper">
          <img src={imgUrl} alt={title}></img>
        </div>
        <div className="coffeeNameWrapper">
          <span>{title}</span>
          <FontAwesomeIcon
            className="heartIcon"
            icon={isHeartClicked ? heartSolid : heartRegular}
            onClick={() => clickHeartIcon(uuid)}
          />
        </div>
      </div>
    );
  }
}
