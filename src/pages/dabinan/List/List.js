import React, { Component } from 'react';
import TopNav from '../components/TopNav/TopNav';
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import Data from './components/CoffeeCard/mockData';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="ListPage">
        <TopNav />
        <main>
          <section className="container">
            <div className="coffeeCategory" id="coldBrew">
              <div className="coffeeCategoryWithoutDecaf">
                <a href="#coldBrew">콜드 브루 커피</a>
                <img
                  alt="DECAF"
                  src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
                />
              </div>
              <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
            </div>
            <div className="coffeeList">
              {Data[0].coldbrew.map((data, index) => {
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
            <div className="coffeeCategory" id="brewed">
              <div className="coffeeCategoryWithoutDecaf">
                <a href="#brewed">브루드 커피</a>
                <img
                  alt="DECAF"
                  src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
                />
              </div>
              <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
            </div>
            <div className="coffeeList">
              {Data[1].brewedcoffee.map((data, index) => {
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
