import React, { Component } from 'react';

import TopNav from '../../../components/Nav/Nav';
import Category from './Category';
import Footer from '../../../components/Footer/Footer';

import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = { categoryList: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/coffeeCardMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          categoryList: data,
        });
      });
  }

  render() {
    const { categoryList } = this.state;
    return (
      <div className="List">
        <TopNav />
        <section className="menu">
          {categoryList.map(category => {
            return (
              <Category title={category.title} coffees={category.coffees} />
            );
          })}
        </section>
        <Footer />
      </div>
    );
  }
}

export default List;
