import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartInactive } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartActive } from '@fortawesome/free-solid-svg-icons';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  constructor() {
    super();
    this.state = {
      coldbrew: [],
      brewedCoffee: [],
      isLiked: false,
    };
  }
  likeButtonClicked = () => {
    this.setState({ isLiked: !this.state.isLiked });
  };

  moveToDetailPage = () => {
    this.props.history.push(`/list-dabin/detail-dabin/${this.props.id}`);
  };

  render() {
    const { isLiked } = this.state;
    return (
      <>
        <div className="CoffeeCard">
          <div className="coffeeImgWithIcon">
            <img
              className="coffeeImg"
              alt={this.props.title}
              src={this.props.img}
              onClick={this.moveToDetailPage}
            />
            <label className="listLikeButton">
              <i onClick={this.likeButtonClicked} className="LikeButton">
                <FontAwesomeIcon
                  icon={isLiked ? heartActive : heartInactive}
                  className={isLiked ? 'fillHeart' : ''}
                />
              </i>
            </label>
          </div>
          <p className="listPageCoffeeName">{this.props.title}</p>
        </div>
      </>
    );
  }
}

export default withRouter(CoffeeCard);
