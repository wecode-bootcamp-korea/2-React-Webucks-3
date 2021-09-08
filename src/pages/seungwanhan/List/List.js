import React, { Component } from 'react';
import TopNav from '../../../components/Nav/Nav';
import CoffeeCategory from './CoffeeCategory/CoffeeCategory';
import CoffeeGrid from './CoffeeGrid/CoffeeGrid';
import COFFEE_INFO_LIST from './data/CoffeeInfoList';
import './List.scss';

export default class List extends Component {
  render() {
    return (
      <div className="List">
        <TopNav />
        <main className="coffeeListContainer">
          <CoffeeCategory coffeeName="콜드 브루 커피" />
          <CoffeeGrid coffeeInfoList={COFFEE_INFO_LIST.coldBrewCoffee} />

          <CoffeeCategory coffeeName="브루드 커피" />
          <CoffeeGrid coffeeInfoList={COFFEE_INFO_LIST.brewedCoffee} />
        </main>
      </div>
    );
  }
}
