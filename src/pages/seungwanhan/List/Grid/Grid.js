import React, { Component } from 'react';
import COFFEE_LIST from '../data/CoffeeList';
import './Grid.scss';

class Grid extends Component {
  render() {
    let coffeeInfoList = [];
    if (this.props.coffeeKind === 'coldbrew') {
      coffeeInfoList = COFFEE_LIST[0].coldBrewCoffee;
    } else if (this.props.coffeeKind === 'brewed') {
      coffeeInfoList = COFFEE_LIST[1].brewedCoffee;
    }
    const aaa = coffeeInfoList.map(coffeeInfo => {
      return (
        <div className="gridCell">
          <div className="imgWrapper">
            <img src={coffeeInfo.img} alt={coffeeInfo.title}></img>
          </div>
          <p>{coffeeInfo.title}</p>
        </div>
      );
    });

    return <section className="gridWrapper">{aaa}</section>;
  }
}

export default Grid;
