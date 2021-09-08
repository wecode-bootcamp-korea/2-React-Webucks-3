import React, { Component } from 'react';
import './SectorBorder.scss';

class SectorBorder extends Component {
  render() {
    return (
      <div className="sector">
        <h2 className="sectorTitle">{this.props.sectorName}</h2>
        <img alt="머그잔" src="/images/jihoonhan/mug.jpeg" />
        <h3 className="sectorComment">
          디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </h3>
      </div>
    );
  }
}

export default SectorBorder;
