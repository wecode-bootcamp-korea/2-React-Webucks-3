import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartInactive } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartActive } from '@fortawesome/free-solid-svg-icons';
import TopNav from '../components/TopNav/TopNav';
import NavBar from './components/NavBar/NavBar';
import NutritionInfo from './components/NutritionInfo/NutritionInfo';
import Review from './components/Review/Review';
import Footer from '../components/Footer/Footer';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      details: {},
      isLiked: false,
    };
  }

  likeButtonClicked = () => {
    this.setState({ isLiked: !this.state.isLiked });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch('http://localhost:3000/data/detailMockData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          details: data.data.filter(detail => detail.id === +id)[0],
        });
      });
  }

  render() {
    const { details, isLiked } = this.state;
    return (
      <div className="DetailPage">
        <TopNav />
        <main>
          <section className="detailContainer">
            <section className="detailCoffeeTitle">
              <h1>{details.category}</h1>
              <NavBar
                navCategory="MENU"
                foodCategory="음료"
                coffeeCategory={details.category}
                coffeeName={details.name}
              />
            </section>
            <section className="detailCoffeeInfo">
              <div className="detailCoffeeInfoImg">
                <img alt={details.name} src={details.imgUrl} />
              </div>
              <div className="detailCoffeeInfoNonImg">
                <div className="detailCoffeeName">
                  <h2>
                    {details.name}
                    <br />
                    <span>{details.engName}</span>
                  </h2>
                  <div className="detailLikeButton">
                    <i onClick={this.likeButtonClicked} className="LikeButton">
                      <FontAwesomeIcon
                        icon={isLiked ? heartActive : heartInactive}
                        className={isLiked ? 'fillHeart' : ''}
                      />
                    </i>
                  </div>
                </div>
                <p className="detailDescription">{details.summary}</p>
                <div className="detailImg2">
                  <img alt={details.name} src={details.imgUrl} />
                </div>
                <NutritionInfo {...details} />
                <Review />
              </div>
            </section>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Detail;
