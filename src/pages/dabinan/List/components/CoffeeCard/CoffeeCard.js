import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LikeButton from '../../../components/LikeButton/LikeButton';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  render() {
    const { id, title, img } = this.props;
    return (
      <>
        <div className="CoffeeCard">
          <div className="coffeeImgWithIcon">
            <img
              className="coffeeImg"
              alt={title}
              src={img}
              onClick={() =>
                this.props.history.push(`/list-dabin/detail-dabin/${id}`)
              }
            />
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

export default withRouter(CoffeeCard);
