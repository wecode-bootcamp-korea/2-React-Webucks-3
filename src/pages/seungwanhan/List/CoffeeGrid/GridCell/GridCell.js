import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import './GridCell.scss';

export default class GridCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeartClicked: false,
    };
  }

  clickHeartIcon = () => {
    this.setState({
      isHeartClicked: !this.state.isHeartClicked,
    });
  };

  render() {
    const { imgUrl, title } = this.props;
    return (
      <div className="GridCell">
        <div className="coffeeImgWrapper">
          <img src={imgUrl} alt={title}></img>
        </div>
        <div className="coffeeNameWrapper">
          <span>{title}</span>
          <FontAwesomeIcon
            icon={this.state.isHeartClicked ? heartSolid : heartRegular}
            className="heartIcon"
            onClick={this.clickHeartIcon}
          />
        </div>
      </div>
    );
  }
}
