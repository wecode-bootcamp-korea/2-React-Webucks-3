import React, { Component } from 'react';

import Category from './Category';

import './List.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { categoryList: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/coffeeCardMockData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          categoryList: data,
        });
      });
  }

  isCoffeeCardLiked = (categoryTitle, coffeeName, isLiked) => {
    const { categoryList } = this.state;
    const updatedList = [...categoryList];
    for (let category of updatedList) {
      if (categoryTitle === category.title) {
        for (let coffee of category.coffees) {
          if (coffeeName === coffee.name) {
            coffee.isLiked = isLiked;
          }
        }
      }
    }
    this.setState({ categoryList: updatedList });
  };

  render() {
    const { categoryList } = this.state;
    const { isCoffeeCardLiked } = this;

    return (
      <div className="List">
        {/* <TopNav /> */}
        <section className="menu">
          {categoryList.map(category => {
            return (
              <Category
                key={category.id}
                title={category.title}
                coffees={category.coffees}
                isCoffeeCardLiked={isCoffeeCardLiked}
              />
            );
          })}
        </section>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default List;
