import React, { Component } from 'react';
import TopNav from '../../../components/Nav/Nav';
import Headline from './Headline/Headline';
import Grid from './Grid/Grid';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="List">
        <div className="contentsWrapper">
          <TopNav />
          <main className="mainContents">
            <Headline coffeeName="콜드 브루 커피" />
            <Grid coffeeKind="coldbrew" />
            <Headline coffeeName="브루드 커피" />
            <Grid coffeeKind="brewed" />
          </main>
        </div>
      </div>
    );
  }
}

export default List;
