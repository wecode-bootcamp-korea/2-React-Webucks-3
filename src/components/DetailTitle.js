import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailTitle.scss';

class DetailTitle extends Component {
  render() {
    return (
      <>
        <div className="nameColdbrew">
          <span>콜드 브루</span>
        </div>
        <div>
          <nav>
            <ul className="arrowNav">
              <li>
                <Link to="/Login-jihoon">홈</Link>
              </li>
              <li>&gt;</li>
              <li>
                <Link to="/list-jihoon">MENU</Link>
              </li>
              <li>&gt;</li>
              <li>
                <Link to="/list-jihoon">음료</Link>
              </li>
              <li>&gt;</li>
              <li>
                <Link to="/list-jihoon">브루드 커피</Link>
              </li>
              <li>&gt;</li>
              <li>
                <Link to="/detail-jihoon">나이트로 바닐라 크림</Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default DetailTitle;
