import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import './LikeBtn.scss';

class LikeBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { isLikeBtnClicked: false };
  }

  handleLikeBtnColor = () => {
    const { isLikeBtnClicked } = this.state;
    this.setState({ isLikeBtnClicked: !isLikeBtnClicked });
  };

  render() {
    const { isLikeBtnClicked } = this.state;
    const { handleLikeBtnColor } = this;
    return (
      <div className="like-btn-wrap">
        <button
          className={isLikeBtnClicked ? 'like-wrap clicked' : 'like-wrap'}
          id="product-like"
          onClick={handleLikeBtnColor}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    );
  }
}

export default LikeBtn;
