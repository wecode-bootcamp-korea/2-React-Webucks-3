import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LikeBtn from '../../../components/LikeBtn/LikeBtn';

import './CoffeeCard.scss';

class CoffeeCard extends Component {
  render() {
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
          <LikeBtn />
        </dd>
      </div>
    );
  }
}

export default CoffeeCard;
