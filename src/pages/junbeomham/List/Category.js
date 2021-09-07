import React, { Component } from 'react';

import CoffeeCard from './CoffeeCard';

import './Category.scss';

class Category extends Component {
  render() {
    const { title, coffees } = this.props;
    return (
      <article>
        <section className="title-wrap">
          <p className="title">{title}</p>
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
            {coffees.map(cardData => {
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
    );
  }
}

export default Category;
