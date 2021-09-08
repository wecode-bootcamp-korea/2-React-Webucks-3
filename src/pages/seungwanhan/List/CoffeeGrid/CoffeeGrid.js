import React, { Component } from 'react';
import GridCell from './GridCell/GridCell';
import './CoffeeGrid.scss';

export default class CoffeeGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeInfoList: this.props.coffeeInfoList,
    };
  }

  clickHeartIcon = uuid => {
    const newList = this.state.coffeeInfoList.map(el => {
      if (el.uuid === uuid) {
        el.isHeartClicked = !el.isHeartClicked;
        return el;
      } else {
        return el;
      }
    });

    this.setState({ coffeeInfoList: newList });
  };

  render() {
    const gridCell = this.state.coffeeInfoList.map(coffeeInfo => (
      <GridCell {...coffeeInfo} clickHeartIcon={this.clickHeartIcon} />
    ));
    return <section className="CoffeeGrid">{gridCell}</section>;
  }
}
