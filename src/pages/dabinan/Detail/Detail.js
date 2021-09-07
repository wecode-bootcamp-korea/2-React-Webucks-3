import React, { Component } from 'react';
import TopNav from '../components/TopNav/TopNav';
import NavBar from './components/NavBar/NavBar';
import LikeButton from '../components/LikeButton/LikeButton';
import NutritionInfo from './components/NutritionInfo/NutritionInfo';
import Review from './components/Review/Review';
import Footer from '../components/Footer/Footer';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      details: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id * 1;
    fetch('http://localhost:3000/data/detailMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          details: data.data.filter(detail => detail.id === id)[0],
        });
      });
  }

  render() {
    const { details } = this.state;
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
                    <LikeButton />
                  </div>
                </div>
                <p className="detailDescription">{details.summary}</p>
                <div className="detailImg2">
                  <img alt={details.name} src={details.imgUrl} />
                </div>
                <NutritionInfo
                  servingSize={details.servingSize}
                  kcal={details.kcal}
                  fat={details.fat}
                  protein={details.protein}
                  natrium={details.natrium}
                  sugars={details.sugars}
                  caffeine={details.caffeine}
                  allergen={details.allergen}
                />
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
