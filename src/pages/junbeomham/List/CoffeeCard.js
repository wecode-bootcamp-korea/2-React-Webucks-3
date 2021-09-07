import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LikeBtn from '../../../components/LikeBtn/LikeBtn';

import './CoffeeCard.scss';

class CoffeeCard extends Component {
  render() {
    const { name, imgUrl } = this.props;
    return (
      <div className="item">
        <dt className="img-wrap">
          <div className="scale">
            <Link to="/detail-junbeom">
              <img alt={name} src={imgUrl} />
            </Link>
          </div>
        </dt>
        <dd>
          {name}
          <LikeBtn />
        </dd>
      </div>
    );
  }
}

export default CoffeeCard;
