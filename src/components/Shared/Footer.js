import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="detailFooter">
        <ul className="categoryWrap">
          <li>
            <a href="#none" className="categoryHead">
              COMPANY
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              한눈에 보기
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              스타벅스 사명
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              스타벅스 소개
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              국내 뉴스룸
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              세계의 스타벅스
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              글로벌 뉴스룸
            </a>
          </li>
        </ul>
        <ul className="categoryWrap">
          <li>
            <a href="#none" className="categoryHead">
              CORPORATE SALES
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              단체 및 기업 구매 안내
            </a>
          </li>
        </ul>
        <ul className="categoryWrap">
          <li>
            <a href="#none" className="categoryHead">
              PARTNERSHIP
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              신규 입점 제의
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              협력 고객사 등록신청
            </a>
          </li>
        </ul>
        <ul className="categoryWrap">
          <li>
            <a href="#none" className="categoryHead">
              ONLINE COMMUNITY
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              페이스북
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              트위터
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              유튜브
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              블로그
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              인스타그램
            </a>
          </li>
        </ul>
        <ul className="categoryWrap">
          <li>
            <a href="#none" className="categoryHead">
              RECRUIT
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              채용 소개
            </a>
          </li>
          <li>
            <a href="#none" className="category">
              채용 지원하기
            </a>
          </li>
        </ul>
        <ul className="categoryWrap">
          <li>
            <a href="#none" className="categoryHead">
              WEBUCKS
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
