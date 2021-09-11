import React, { Component } from 'react';

import TypeOfCoffeeTitle from '../../../components/List/TypeOfCoffeeTitle';
import TypeOfCoffeeList from '../../../components/List/TypeOfCoffeeList';

import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      coldBrew: [],
      brewedCoffee: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/mockData.json', {
      header: {
        Accept: 'application / json',
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data,
          coldBrew: data[0].coffeeList,
          brewedCoffee: data[1].coffeeList,
        });
      });
  }

  render() {
    const { products, coldBrew, brewedCoffee } = this.state;

    return (
      <div className="listContainer">
        <section className="typeOfCoffeeWrap">
          <div className="TypeOfCoffeeTitleWrap">
            <TypeOfCoffeeTitle
              key={products[0]?.id}
              id={products[0]?.id}
              title={products[0]?.title}
            />
          </div>
          <div className="coffeeTable">
            {coldBrew.map(props => {
              return (
                <TypeOfCoffeeList
                  key={props.id}
                  id={props.id}
                  img={props.imgUrl}
                  title={props.name}
                />
              );
            })}
          </div>
        </section>

        <section className="typeOfCoffeeWrap">
          <div className="TypeOfCoffeeTitleWrap">
            <TypeOfCoffeeTitle
              id={products[1]?.id}
              title={products[1]?.title}
            />
          </div>
          <div className="coffeeTable">
            {brewedCoffee.map(props => {
              return (
                <TypeOfCoffeeList
                  key={props.id}
                  id={props.id}
                  img={props.imgUrl}
                  title={props.title}
                />
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default List;
