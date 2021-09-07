import React, { Component } from 'react';
import Review from './DetailReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import './DetailContainer.scss';

class DetailContainer extends Component {
  constructor() {
    super();
    this.state = {
      heartClicked: false,
    };
  }

  heartOnOff = () => {
    this.setState({ heartClicked: !this.state.heartClicked });
  };

  render() {
    const { heartClicked } = this.state;
    return (
      <div className="container">
        <img className="mainImg" alt={this.props.alt} src={this.props.src} />
        <div className="table">
          <div className="coffeename">
            <span className="kor">{this.props.kor}</span>
            <span className="eng">
              <br />
              {this.props.eng}
            </span>
            <FontAwesomeIcon
              className={heartClicked ? 'fas heart' : 'heart'}
              icon={heartClicked ? fasHeart : farHeart}
              onClick={this.heartOnOff}
            />
          </div>
          <div className="coffee-detail">{this.props.summary}</div>
          <div className="size">
            <span className="ingreInfo">제품 영양 정보</span>
            <span className="productSize">{this.props.size}</span>
          </div>
          <div className="ingredients">
            <div className="ingredients-name">
              <span>
                1회 제공량 (kcal)
                <br />
              </span>
              <span>
                포화지방 (g)
                <br />
              </span>
              <span>단백질 (g)</span>
            </div>
            <div className="measure-left">
              <span className="measure">
                {this.props.kcal}
                <br />
              </span>
              <span className="measure">
                {this.props.fat}
                <br />
              </span>
              <span className="measure">{this.props.protein}</span>
            </div>
            <div className="ingredients-name">
              <span>
                나트륨 (mg)
                <br />
              </span>
              <span>
                당류 (g)
                <br />
              </span>
              <span>카페인 (mg)</span>
            </div>
            <div className="measure-right">
              <span className="measure">
                {this.props.natrium}
                <br />
              </span>
              <span className="measure">
                {this.props.sugar}
                <br />
              </span>
              <span className="measure">{this.props.caffeine}</span>
            </div>
          </div>
          <div className="allergic">
            알레르기 유발 요인: {this.props.allergen}
          </div>
          <Review />
        </div>
      </div>
    );
  }
}

export default DetailContainer;
