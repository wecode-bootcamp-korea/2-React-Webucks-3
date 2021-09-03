import React, { Component } from 'react';

//components
import TopNav from '../../../components/Nav/Nav';
import CoffeeList from '../../../components/List/CoffeeList';
import COFFEE_LIST from '../../../components/List/COFFEE_LIST';
import TypeOfCoffeeInner from '../../../components/List/TypeOfCoffeeInner';

// CSS
import './List.scss';

const coldBrewCoffeeList = COFFEE_LIST[0].coldBrewCoffee;
const brewedCoffeeList = COFFEE_LIST[1].brewedCoffee;
const TYPE_OF_COFFEE = [
  [{ id: 1, title: '콜드 브루 커피' }],
  [{ id: 2, title: '브루드 커피' }],
];

class List extends Component {
  render() {
    return (
      <div className="listContainer">
        <TopNav />
        <section className="typeOfCoffeeWrap">
          <>
            {TYPE_OF_COFFEE[0].map(props => {
              return <TypeOfCoffeeInner id={props.id} title={props.title} />;
            })}
          </>
          <div className="coffeeTable">
            {coldBrewCoffeeList.map(props => {
              return (
                <CoffeeList id={props.id} img={props.img} title={props.title} />
              );
            })}
          </div>
        </section>

        <section className="typeOfCoffeeWrap">
          <>
            {TYPE_OF_COFFEE[1].map(props => {
              return <TypeOfCoffeeInner id={props.id} title={props.title} />;
            })}
          </>
          <div className="coffeeTable">
            {brewedCoffeeList.map(props => {
              return (
                <CoffeeList id={props.id} img={props.img} title={props.title} />
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default List;
