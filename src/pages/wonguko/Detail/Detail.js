import React, { Component } from 'react';

//components
import TopNav from '../../../components/Nav/TopNav';
import Footer from '../../../components/Shared/Footer';
import ProductDetail from '../../../components/Detail/ProductDetail';

// css
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="detailContainer">
        <TopNav />
        <ProductDetail />
        <Footer />
      </div>
    );
  }
}

export default Detail;
