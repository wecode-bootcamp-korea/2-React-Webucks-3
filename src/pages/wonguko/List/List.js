import React, { Component } from 'react';

//components
import TopNav from '../../../components/Nav/Nav';
import CoffeeList from '../../../components/List/CoffeeList';
import coffeeListMockData from '../../../components/List/MockData';
import TypeOfCoffeeInner from '../../../components/List/TypeOfCoffeeInner';

// CSS
import './List.scss';

const coldBrewCoffeeList = coffeeListMockData[0].coldBrewCoffee;
const brudCoffeeList = coffeeListMockData[1].brudCoffee;
const typeOfCoffee = [
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
            {typeOfCoffee[0].map(props => {
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
            {typeOfCoffee[1].map(props => {
              return <TypeOfCoffeeInner id={props.id} title={props.title} />;
            })}
          </>
          <div className="coffeeTable">
            {brudCoffeeList.map(props => {
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
