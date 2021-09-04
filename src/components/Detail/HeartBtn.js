import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './HeartBtn.scss';

class HeartBtn extends Component {
  constructor() {
    super();
    this.state = {
      heart: false,
    };
  }

  handleHeartBtn = () => {
    if (this.state.heart) {
      this.setState({
        heart: false,
      });
    } else {
      this.setState({
        heart: true,
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <FontAwesomeIcon
          active={this.state.heart ? 'heartBtn active' : 'heartBtn'}
          onClick={this.handleHeartBtn}
          icon={faHeart}
        />
      </>
    );
  }
}

export default HeartBtn;
