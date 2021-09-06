import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import './GridCell.scss';

export default class GridCell extends Component {
  constructor() {
    super();
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
    return (
      <div className="GridCell">
        <div className="imgWrapper">
          <img src={this.props.imgUrl} alt={this.props.title}></img>
        </div>
        <div className="coffeeName">
          <span>{this.props.title}</span>
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
