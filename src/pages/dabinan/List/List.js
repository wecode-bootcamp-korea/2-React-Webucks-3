import React, { Component } from 'react';
import TopNav from '../components/TopNav/TopNav';
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import CoffeeCategory from './components/CoffeeCategory/CoffeeCategory';
import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      coldbrew: [],
      brewedCoffee: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/listMockData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          coldbrew: data.coldbrew,
          brewedCoffee: data.brewedCoffee,
        });
      });
  }

  render() {
    const { coldbrew, brewedCoffee } = this.state;
    return (
      <div className="ListPage">
        <TopNav />
        <main className="listMain">
          <section className="listContainer">
            <CoffeeCategory name={'콜드 브루 커피'} />
            <div className="coffeeList">
              {coldbrew.map(data => {
                return (
                  <CoffeeCard
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    img={data.img}
                  />
                );
              })}
            </div>
          </section>
          <section className="listContainer">
            <CoffeeCategory name={'브루드 커피'} />
            <div className="coffeeList">
              {brewedCoffee.map(data => {
                return (
                  <CoffeeCard
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    img={data.img}
                  />
                );
              })}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default List;
