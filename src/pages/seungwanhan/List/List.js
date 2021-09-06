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
          <Headline name="콜드 브루 커피" />
          <Grid category="coldbrew" />

          <Headline name="브루드 커피" />
          <Grid category="brewed" />
        </main>
      </div>
    );
  }
}

export default List;
