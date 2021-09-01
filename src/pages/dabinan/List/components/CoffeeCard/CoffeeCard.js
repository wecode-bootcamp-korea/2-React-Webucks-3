import React, { Component } from 'react';
import LikeButton from '../../../components/LikeButton/LikeButton';
import { Link } from 'react-router-dom';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  render() {
    return (
      <>
        <div className="CoffeeCard">
          <div className="coffeeImg">
            <img alt={this.props.title} src={this.props.img} />
            <label className="listLikeButton">
              <LikeButton />
            </label>
          </div>
          <p>
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
