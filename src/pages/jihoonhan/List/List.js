/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './List.scss';
import TopNav from '../../../components/Nav/TopNav';
import { COLDBREW_LIST } from './ListMockData';
import { BREW_LIST } from './ListMockData';

class List extends Component {
  render() {
    return (
      <>
        <TopNav />

        <article className="menus">
          <div className="sector coldbrew">
            <h2>콜드 브루 커피</h2>
            <a className="mug">
              <img
                alt="머그잔"
                src="../../../../public/images/jihoonhan/mug.jpeg"
              />
            </a>
            <h3>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h3>
          </div>

          <div className="coldbrewMenu">
            {COLDBREW_LIST.map(coldbrewList => {
              return (
                <li>
                  <a>
                    <img
                      key={coldbrewList.id}
                      alt={coldbrewList.alt}
                      src={coldbrewList.src}
                    />
                  </a>
                  <p>{coldbrewList.coffeeName}</p>
                </li>
              );
            })}
          </div>

          <div className="sector brew">
            <h2>브루 커피</h2>
            <a className="mug">
              <img alt="머그잔" src="/images/mug.jpeg" />
            </a>
            <h3>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h3>
          </div>

          <div className="brewMenu">
            {BREW_LIST.map(brewList => {
              return (
                <li>
                  <a>
                    <img
                      key={brewList.id}
                      alt={brewList.alt}
                      src={brewList.src}
                    />
                  </a>
                  <p>{brewList.coffeeName}</p>
                </li>
              );
            })}

            {/* <ul>
              <li>
                <a>
                  <img alt='아이스커피' src='/images/아이스커피.jpg' />
                </a>
                <p>아이스 커피</p>
              </li>
              <li>
                <a>
                  <img alt='오늘의커피' src='/images/오늘의커피.jpg' />
                </a>
                <p>오늘의 커피</p>
              </li>
            </ul> */}
          </div>
        </article>
      </>
    );
  }
}

export default List;
