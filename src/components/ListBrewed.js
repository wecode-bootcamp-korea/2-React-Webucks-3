/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import './ListBrewed.scss';

class BrewedCoffees extends Component {
  constructor() {
    super();
    this.state = {
      heartClicked: false,
      icon: farHeart,
      iconClassName: 'far listHeart',
    };
    this.heartOnOff = this.heartOnOff.bind(this);
  }

  heartOnOff = () => {
    this.setState({
      heartClicked: !this.state.heartClicked,
    });
    this.state.heartClicked
      ? this.setState({ icon: fasHeart, iconClassName: 'fas listHeart' })
      : this.setState({
          icon: farHeart,
          iconClassName: 'far listHeart',
        });
  };
  render() {
    const { heartClicked } = this.state;
    return (
      <li className="brewedList">
        <div>
          <FontAwesomeIcon
            icon={heartClicked ? fasHeart : farHeart}
            className={heartClicked ? 'fas listHeart' : 'listHeart'}
            onClick={this.heartOnOff}
          />
        </div>
        <Link to="/detail-jihoon">
          <div className="imgFrame" name={this.props.index}>
            <img alt={this.props.alt} src={this.props.src} />
          </div>
          <p>{this.props.coffeeName}</p>
        </Link>
      </li>
    );
  }
}

export default BrewedCoffees;
