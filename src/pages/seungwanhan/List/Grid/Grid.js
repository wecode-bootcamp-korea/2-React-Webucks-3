import React, { Component } from 'react';
import GridCell from './GridCell/GridCell';
import COFFEE_IMG_LIST from '../data/CoffeeImgList';
import './Grid.scss';

class Grid extends Component {
  constructor() {
    super();

    this.imgList = [];
    if (this.props.category === 'coldbrew') {
      this.imgList = COFFEE_IMG_LIST.coldBrewCoffee;
    } else if (this.props.category === 'brewed') {
      this.imgList = COFFEE_IMG_LIST.brewedCoffee;
    }
  }

  render() {
    const gridCell = this.imgList.map(img => {
      return <GridCell imgUrl={img.imgUrl} title={img.title} />;
    });

    return <section className="Grid">{gridCell}</section>;
  }
}

export default Grid;
