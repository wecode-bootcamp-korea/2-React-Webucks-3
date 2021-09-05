import React, { Component } from 'react';
import TopNav from '../components/TopNav/TopNav';
import NavBar from './components/NavBar/NavBar';
import LikeButton from '../components/LikeButton/LikeButton';
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
    console.log(id);
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
    console.log(this.state.details);
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
                <p className="detailDescription">
                  {details.summary}
                  <br />
                  {details.desc}
                </p>
                <div className="detailImg2">
                  <img alt={details.name} src={details.imgUrl} />
                </div>
                <div className="nutrition">
                  <h5 className="sizeForNutrition">
                    <p className="productNutritionInfo">제품 영양 정보</p>
                    <p className="nutritionInfoDetails">
                      {details.servingSize}
                    </p>
                  </h5>
                  <div className="nutritionList">
                    <table className="leftTable">
                      <tbody>
                        <tr>
                          <td>1회 제공량(kcal)</td>
                          <td>{details.kcal}</td>
                        </tr>
                        <tr>
                          <td>포화지방 (g)</td>
                          <td>{details.fat}</td>
                        </tr>
                        <tr>
                          <td>단백질 (g)</td>
                          <td>{details.protein}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="rightTable">
                      <tbody>
                        <tr>
                          <td>나트륨 (mg)</td>
                          <td>{details.natrium}</td>
                        </tr>
                        <tr>
                          <td>당류 (g)</td>
                          <td>{details.sugars}</td>
                        </tr>
                        <tr>
                          <td>카페인 (mg)</td>
                          <td>{details.caffeine}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="alergy">
                    알레르기 유발 요인: {details.allergen}
                  </div>
                </div>
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
