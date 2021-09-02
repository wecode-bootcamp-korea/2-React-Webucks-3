import React, { Component } from 'react';
import TopNav from '../components/TopNav/TopNav';
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import CoffeeCategory from './components/CoffeeCategory/CoffeeCategory';
import DATA from './components/CoffeeCard/mockData';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="ListPage">
        <TopNav />
        <main className="listMain">
          <section className="listContainer">
            <CoffeeCategory name={'콜드 브루 커피'} />
            <div className="coffeeList">
              {DATA[0].coldbrew.map((data, index) => {
                return (
                  <CoffeeCard
                    key={index}
                    id={data.id}
                    title={data.title}
                    img={data.img}
                  />
                );
              })}
            </div>
          </section>
          <section className="container">
            <CoffeeCategory name={'브루드 커피'} />
            <div className="coffeeList">
              {DATA[1].brewedcoffee.map((data, index) => {
                return (
                  <CoffeeCard
                    key={index}
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
