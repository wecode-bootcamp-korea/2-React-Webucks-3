import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartInactive } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartActive } from '@fortawesome/free-solid-svg-icons';
import './LikeButton.scss';

class LikeButton extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };
  }

  likeButtonClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { clicked } = this.state;
    return (
      <i onClick={this.likeButtonClicked}>
        <FontAwesomeIcon
          icon={clicked ? heartActive : heartInactive}
          className={clicked ? 'fillHeart' : ''}
        />
      </i>
    );
  }
}

export default LikeButton;
