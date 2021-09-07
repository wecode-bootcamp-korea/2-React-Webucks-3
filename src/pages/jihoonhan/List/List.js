/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import TopNav from '../../../components/Nav/TopNav';
import Footer from '../../../components/Footer';
import SectorBorder from '../../../components/SectorBorder';
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
        <header>
          <TopNav />
        </header>

        <article>
          <SectorBorder sectorName={'콜드 브루 커피'} />
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
          <SectorBorder sectorName={'브루드 커피'} />
          <ul className="brewedMenu">
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
          </ul>
        </article>

        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default List;
