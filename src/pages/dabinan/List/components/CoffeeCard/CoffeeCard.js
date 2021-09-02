import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../../../components/LikeButton/LikeButton';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  render() {
    return (
      <>
        <div className="CoffeeCard">
          <div className="coffeeImgWithIcon">
            <img
              className="coffeeImg"
              alt={this.props.title}
              src={this.props.img}
            />
            <label className="listLikeButton">
              <LikeButton />
            </label>
          </div>
          <p className="listPageCoffeeName">
            <Link to="/detail-dabin" className="linkToDetail">
              {this.props.title}
            </Link>
          </p>
        </div>
      </>
    );
  }
}

export default CoffeeCard;
