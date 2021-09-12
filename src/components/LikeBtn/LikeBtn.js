import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import './LikeBtn.scss';

class LikeBtn extends Component {
  constructor(props) {
    super(props);
    const { isLiked } = this.props;
    this.state = { isLikeBtnClicked: isLiked };
  }

  handleLikeBtnColor = () => {
    const { isLikeBtnClicked } = this.state;
    const { whoseBtn, handler, userId, categoryTitle, coffeeName } = this.props;
    this.setState({ isLikeBtnClicked: !isLikeBtnClicked });

    switch (whoseBtn) {
      case 'product':
        handler(!isLikeBtnClicked);
        break;
      case 'review':
        handler(userId, !isLikeBtnClicked);
        break;
      case 'coffeeCard':
        handler(categoryTitle, coffeeName, !isLikeBtnClicked);
        break;
      default:
        break;
    }
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
