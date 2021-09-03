import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../../../components/LikeButton/LikeButton';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  render() {
    const { title, img } = this.props;
    return (
      <>
        <div className="CoffeeCard">
          <div className="coffeeImgWithIcon">
            <Link to="/detail-dabin">
              <img className="coffeeImg" alt={title} src={img} />
            </Link>
            <label className="listLikeButton">
              <LikeButton />
            </label>
          </div>
          <p className="listPageCoffeeName">{title}</p>
        </div>
      </>
    );
  }
}

export default CoffeeCard;
