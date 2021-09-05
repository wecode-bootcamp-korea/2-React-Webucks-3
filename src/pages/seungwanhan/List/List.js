import React, { Component } from 'react';
import TopNav from '../../../components/Nav/Nav';
import Headline from './Headline/Headline';
import Grid from './Grid/Grid';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="List">
        <TopNav />
        <main className="contentsWrapper">
          <Headline coffeeName="콜드 브루 커피" />
          <Grid coffeeCategory="coldbrew" />

          <Headline coffeeName="브루드 커피" />
          <Grid coffeeCategory="brewed" />
        </main>
      </div>
    );
  }
}

export default List;
