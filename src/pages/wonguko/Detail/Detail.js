import React, { Component } from 'react';
import ProductDetail from '../../../components/Detail/ProductDetail';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="detailContainer">
        <ProductDetail />
      </div>
    );
  }
}

export default Detail;
