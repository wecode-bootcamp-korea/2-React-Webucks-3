import React, { Component } from 'react';
import COFFEE_IMG_LIST from '../data/CoffeeImgList';
import './Grid.scss';

class Grid extends Component {
  render() {
    let coffeeInfoList = [];
    if (this.props.coffeeCategory === 'coldbrew') {
      coffeeInfoList = COFFEE_IMG_LIST[0].coldBrewCoffee;
    } else if (this.props.coffeeCategory === 'brewed') {
      coffeeInfoList = COFFEE_IMG_LIST[1].brewedCoffee;
    }

    const gridCell = coffeeInfoList.map(coffeeInfo => {
      return (
        <div className="gridCell">
          <div className="imgWrapper">
            <img src={coffeeInfo.img} alt={coffeeInfo.title}></img>
          </div>
          <p>{coffeeInfo.title}</p>
        </div>
      );
    });

    return <section className="gridWrapper">{gridCell}</section>;
  }
}

export default Grid;
