import React, { Component } from 'react';
import './LikeButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartInactive } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartActive } from '@fortawesome/free-solid-svg-icons';

class LikeButton extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };
  }

  render() {
    const { clicked } = this.state;
    return (
      <i
        onClick={() => {
          this.setState({ clicked: !clicked });
        }}
      >
        <FontAwesomeIcon
          icon={clicked ? heartActive : heartInactive}
          className={clicked ? 'fillHeart' : ''}
        />
      </i>
    );
  }
}

export default LikeButton;
