/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import TopNav from '../../../components/Nav/TopNav';
import DetailTitle from '../../../components/DetailTitle';
import DetailContainer from '../../../components/DetailContainer';
import Footer from '../../../components/Footer';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      coffeeDetail: {},
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/myData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        this.setState({
          coffeeDetail: data.coldbrew[1],
        });
      });
  }

  render() {
    const { coffeeDetail } = this.state;
    return (
      <>
        <TopNav />

        <acticle>
          <DetailTitle />
          <DetailContainer
            alt={coffeeDetail.name}
            src={coffeeDetail.imgUrl}
            kor={coffeeDetail.name}
            eng={coffeeDetail.engName}
            summary={coffeeDetail.summary}
            size={coffeeDetail.servingSize}
            kcal={coffeeDetail.kcal}
            fat={coffeeDetail.fat}
            protein={coffeeDetail.protein}
            natrium={coffeeDetail.natrium}
            sugar={coffeeDetail.sugars}
            caffeine={coffeeDetail.caffeine}
            allergen={coffeeDetail.allergen}
          />
        </acticle>

        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default Detail;
