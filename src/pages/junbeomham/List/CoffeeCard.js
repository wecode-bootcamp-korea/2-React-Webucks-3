import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import './CoffeeCard.scss';

class CoffeeCard extends Component {
  constructor() {
    super();
    this.state = { isLikeBtnClicked: false };

    this.handleLikeBtnColor = this.handleLikeBtnColor.bind(this);
  }

  handleLikeBtnColor = () => {
    const { isLikeBtnClicked } = this.state;
    this.setState({ isLikeBtnClicked: !isLikeBtnClicked });
  };

  render() {
    const { isLikeBtnClicked } = this.state;
    const { handleLikeBtnColor } = this;
    return (
      <div className="item">
        <dt className="img-wrap">
          <div className="scale">
            <Link to="/detail-junbeom">
              <img alt={this.props.name} src={this.props.img} />
            </Link>
          </div>
        </dt>
        <dd>
          {this.props.name}
          <button
            className={isLikeBtnClicked ? 'like-wrap clicked' : 'like-wrap'}
            onClick={handleLikeBtnColor}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </dd>
      </div>
    );
  }
}

export default CoffeeCard;
