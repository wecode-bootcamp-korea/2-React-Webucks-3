import React, { Component } from 'react';
import TopNav from '../../../components/Nav/TopNav';
import TypeOfCoffeeTitle from '../../../components/List/TypeOfCoffeeTitle';
import TypeOfCoffeeList from '../../../components/List/TypeOfCoffeeList';
import COFFEE_LIST from '../../../components/List/COFFEE_LIST';
import Footer from '../../../components/Shared/Footer';
import './List.scss';

class List extends Component {
  render() {
    const coldBrewCoffeeList = COFFEE_LIST[0].coldBrewCoffee;
    const brewedCoffeeList = COFFEE_LIST[1].brewedCoffee;
    const TYPE_OF_COFFEE = [
      [{ id: 1, title: '콜드 브루 커피' }],
      [{ id: 2, title: '브루드 커피' }],
    ];
    return (
      <div className="listContainer">
        <TopNav />
        <section className="typeOfCoffeeWrap">
          <div className="TypeOfCoffeeTitleWrap">
            {TYPE_OF_COFFEE[0].map(props => {
              return (
                <TypeOfCoffeeTitle
                  key={props.id}
                  id={props.id}
                  title={props.title}
                />
              );
            })}
          </div>
          <div className="coffeeTable">
            {coldBrewCoffeeList.map(props => {
              return (
                <TypeOfCoffeeList
                  key={props.id}
                  id={props.id}
                  img={props.img}
                  title={props.title}
                />
              );
            })}
          </div>
        </section>

        <section className="typeOfCoffeeWrap">
          <div className="TypeOfCoffeeTitleWrap">
            {TYPE_OF_COFFEE[1].map(props => {
              return <TypeOfCoffeeTitle key={props.id} title={props.title} />;
            })}
          </div>
          <div className="coffeeTable">
            {brewedCoffeeList.map(props => {
              return (
                <TypeOfCoffeeList
                  key={props.id}
                  id={props.id}
                  img={props.img}
                  title={props.title}
                />
              );
            })}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default List;
