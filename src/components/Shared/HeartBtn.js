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
      isHeart: !this.state.isHeart,
    });
  };

  render() {
    return (
      <>
        <FontAwesomeIcon
          className={this.state.isHeart ? 'heartBtn active' : 'heartBtn'}
          onClick={this.handleHeartBtn}
          icon={this.state.isHeart ? fasFaHeart : farFaHeart}
        />
      </>
    );
  }
}

export default HeartBtn;
