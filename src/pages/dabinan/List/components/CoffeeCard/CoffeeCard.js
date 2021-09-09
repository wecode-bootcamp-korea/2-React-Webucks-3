import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartInactive } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartActive } from '@fortawesome/free-solid-svg-icons';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  moveToDetailPage = () => {
    this.props.history.push(`/list-dabin/detail-dabin/${this.props.id}`);
  };

  render() {
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
              <i onClick={this.props.likeButtonClicked} className="LikeButton">
                <FontAwesomeIcon
                  icon={this.props.isLiked ? heartActive : heartInactive}
                  className={this.props.isLiked ? 'fillHeart' : ''}
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
