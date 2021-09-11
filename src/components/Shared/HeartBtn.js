import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import './HeartBtn.scss';

class HeartBtn extends Component {
  constructor() {
    super();
    this.state = {
      isHeart: false,
    };
  }

  handleHeartBtn = () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  };

  render() {
    return (
      <>
        <FontAwesomeIcon
          className={this.state.isLiked ? 'heartBtn active' : 'heartBtn'}
          onClick={this.handleHeartBtn}
          icon={this.state.isLiked ? fasFaHeart : farFaHeart}
        />
      </>
    );
  }
}

export default HeartBtn;
