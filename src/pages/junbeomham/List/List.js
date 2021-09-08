import React, { Component } from 'react';

import TopNav from '../../../components/TopNav/TopNav';
import Category from './Category';
import Footer from '../../../components/Footer/Footer';

import './List.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { categoryList: [] };
  }

  async componentDidMount() {
    fetch('http://localhost:3000/data/coffeeCardMockData.json')
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
              <Category
                key={category.id}
                title={category.title}
                coffees={category.coffees}
              />
            );
          })}
        </section>
        <Footer />
      </div>
    );
  }
}

export default List;
