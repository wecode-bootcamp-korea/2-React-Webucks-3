/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import TopNav from '../../../components/Nav/TopNav';
import ColdBrewCoffees from '../../../components/ListColdBrew';
import BrewedCoffees from '../../../components/ListBrewed';
import COFFEE_LIST from './ListMock';
import './List.scss';

class List extends Component {
  render() {
    return (
      <>
        <TopNav />

        <article className="menus">
          <div className="sector coldbrew">
            <h2>콜드 브루 커피</h2>
            <img alt="머그잔" src="/images/jihoonhan/mug.jpeg" />
            <h3>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h3>
          </div>

          <ul className="coldbrewMenu">
            {COFFEE_LIST[0].coldBrewCoffee.map(data => {
              return (
                <ColdBrewCoffees
                  alt={data.title}
                  src={data.img}
                  coffeeName={data.title}
                />
              );
            })}
          </ul>

          <div className="sector brew">
            <h2>브루드 커피</h2>
            <a className="mug">
              <img alt="머그잔" src="/images/jihoonhan/mug.jpeg" />
            </a>
            <h3>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h3>
          </div>

          <div className="brewMenu">
            {COFFEE_LIST[1].brewedCoffee.map((data, index) => {
              return (
                <BrewedCoffees
                  alt={data.title}
                  src={data.img}
                  coffeeName={data.title}
                />
              );
            })}
          </div>
        </article>
      </>
    );
  }
}

export default List;
