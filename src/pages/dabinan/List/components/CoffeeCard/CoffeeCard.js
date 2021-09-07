import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
              onClick={() =>
                this.props.history.push(
                  `/list-dabin/detail-dabin/${this.props.id}`
                )
              }
            />
            <label className="listLikeButton">
              <LikeButton />
            </label>
          </div>
          <p className="listPageCoffeeName">{this.props.title}</p>
        </div>
      </>
    );
  }
}

export default withRouter(CoffeeCard);
