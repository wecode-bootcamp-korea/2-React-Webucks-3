import React, { Component } from 'react';

import TopNav from '../../../components/Nav/Nav';
import CoffeeCard from './CoffeeCard';
import Footer from '../../../components/Footer/Footer';

import COFFEECARD_DATA from './CoffeCardMockData';

import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="List">
        <TopNav />
        <section className="menu">
          <article>
            <section className="title-wrap">
              <p className="title">콜드 브루 커피</p>
              <img
                alt="decafe logo"
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
              />
              <p className="description">
                디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
              </p>
            </section>
            <section className="items-wrap">
              <dl>
                {COFFEECARD_DATA[0].coldBrewCoffee.map(cardData => {
                  return (
                    <CoffeeCard
                      key={cardData.id}
                      name={cardData.name}
                      img={cardData.img}
                    />
                  );
                })}
              </dl>
            </section>
          </article>

          <article>
            <section className="title-wrap">
              <p className="title">브루드 커피</p>
              <img
                alt="decafe logo"
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
              />
              <p className="description">
                디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
              </p>
            </section>
            <section className="items-wrap">
              <dl>
                {COFFEECARD_DATA[1].brewdCoffee.map(cardData => {
                  return (
                    <CoffeeCard
                      key={cardData.id}
                      name={cardData.name}
                      img={cardData.img}
                    />
                  );
                })}
              </dl>
            </section>
          </article>
        </section>
        <Footer />
      </div>
    );
  }
}

export default List;
