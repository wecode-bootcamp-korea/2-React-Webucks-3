import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import './HeartBtn.scss';

class HeartBtn extends Component {
  constructor() {
    super();
    this.state = {
      heart: false,
    };
  }

  handleHeartBtn = () => {
    this.setState({
      heart: !this.state.heart,
    });
  };

  render() {
    return (
      <>
        <FontAwesomeIcon
          className={this.state.heart ? 'heartBtn active' : 'heartBtn'}
          onClick={this.handleHeartBtn}
          icon={this.state.heart ? fasFaHeart : farFaHeart}
        />
      </>
    );
  }
}

export default HeartBtn;
