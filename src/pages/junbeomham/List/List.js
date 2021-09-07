import React, { Component } from 'react';

import TopNav from '../../../components/Nav/Nav';
import CoffeeCard from './CoffeeCard';
import Footer from '../../../components/Footer/Footer';

import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      coldBrewCoffee: { title: '', coffees: [] },
      brewdCoffee: { title: '', coffees: [] },
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/coffeeCardMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          coldBrewCoffee: data.coldBrewCoffee,
          brewdCoffee: data.brewdCoffee,
        });
      });
  }

  render() {
    const { coldBrewCoffee, brewdCoffee } = this.state;
    return (
      <div className="List">
        <TopNav />
        <section className="menu">
          <article>
            <section className="title-wrap">
              <p className="title">{coldBrewCoffee.title}</p>
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
                {coldBrewCoffee.coffees.map(cardData => {
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
              <p className="title">{brewdCoffee.title}</p>
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
                {brewdCoffee.coffees.map(cardData => {
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
