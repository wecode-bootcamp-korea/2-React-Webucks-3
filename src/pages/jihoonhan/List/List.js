/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import TopNav from '../../../components/Nav/TopNav';
import Footer from '../../../components/Footer';
import ColdBrewCoffees from '../../../components/ListColdBrew';
import BrewedCoffees from '../../../components/ListBrewed';
import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      coldbrews: [],
      breweds: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/myData.json')
      .then(res => res.json())
      .then(result => {
        this.setState({
          coldbrews: result.coldbrew,
          breweds: result.brewed,
        });
      });
  }

  render() {
    return (
      <>
        <TopNav />

        <article className="menus">
          <div className="sector coldbrew">
            <h2>콜드 브루 커피</h2>
            <img alt="머그잔" src="/images/jihoonhan/mug.jpeg" />
            <h3>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h3>
          </div>

          <ul className="coldbrewMenu">
            {this.state.coldbrews.map((data, index) => {
              return (
                <ColdBrewCoffees
                  key={index}
                  alt={data.name}
                  src={data.imgUrl}
                  coffeeName={data.name}
                />
              );
            })}
          </ul>

          <div className="sector brew">
            <h2>브루드 커피</h2>
            <a className="mug">
              <img alt="머그잔" src="/images/jihoonhan/mug.jpeg" />
            </a>
            <h3>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h3>
          </div>

          <div className="brewMenu">
            {this.state.breweds.map((data, index) => {
              return (
                <BrewedCoffees
                  key={index}
                  alt={data.name}
                  src={data.imgUrl}
                  coffeeName={data.name}
                />
              );
            })}
          </div>
        </article>
        <Footer />
      </>
    );
  }
}

export default List;
