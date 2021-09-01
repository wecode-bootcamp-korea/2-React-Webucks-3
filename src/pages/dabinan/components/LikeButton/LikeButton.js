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
    return (
      <i
        onClick={() => {
          this.setState({ clicked: !this.state.clicked });
        }}
      >
        <FontAwesomeIcon
          icon={this.state.clicked ? heartActive : heartInactive}
          className={this.state.clicked ? 'fillHeart' : ''}
        />
      </i>
    );
  }
}

export default LikeButton;
