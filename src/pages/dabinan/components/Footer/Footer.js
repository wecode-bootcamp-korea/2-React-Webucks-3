import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    const FOOTER_DATA = [
      {
        id: 'COMPANY',
        list: [
          '한눈에 보기',
          '스타벅스 사명',
          '스타벅스 소개',
          '국내 뉴스룸',
          '세계의 스타벅스',
          '글로벌 뉴스룸',
        ],
      },
      { id: 'CORPORATE SALES', list: ['단체 및 기업 구매 안내'] },
      { id: 'PARTNERSHIP', list: ['신규 입점 제의', '협력 고객사 등록 신청'] },
      {
        id: 'ONLINE COMMUNITY',
        list: ['페이스북', '트위터', '유튜브', '블로그', '인스타그램'],
      },
      { id: 'RECRUIT', list: ['채용 소개', '채용 지원하기'] },
      { id: 'WEBUCKS', list: [] },
    ];
    return (
      <footer className="footer">
        {FOOTER_DATA.map((data, id) => {
          return (
            <div className="footerCategory" key={id}>
              <h3 className="footerListOuter">{data.id}</h3>
              <ul className="footerListInner">
                <li>{data.list[0]}</li>
                <li>{data.list[1]}</li>
                <li>{data.list[2]}</li>
                <li>{data.list[3]}</li>
                <li>{data.list[4]}</li>
                <li>{data.list[5]}</li>
              </ul>
            </div>
          );
        })}
      </footer>
    );
  }
}

export default Footer;
