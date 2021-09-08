import React, { Component } from 'react';
import TopNav from '../../../components/Nav/Nav';
import CoffeeCategory from './CoffeeCategory/CoffeeCategory';
import CoffeeGrid from './CoffeeGrid/CoffeeGrid';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="List">
        <TopNav />
        <main className="coffeeListContainer">
          <CoffeeCategory coffeeName="콜드 브루 커피" />
          <CoffeeGrid category="coldbrew" />

          <CoffeeCategory coffeeName="브루드 커피" />
          <CoffeeGrid category="brewed" />
        </main>
      </div>
    );
  }
}

export default List;
