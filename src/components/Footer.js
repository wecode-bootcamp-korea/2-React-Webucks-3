import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="footerText">
            <span className="footerTitle">COMPANY</span>
            <br />
            한눈에 보기
            <br />
            스타벅스 사명
            <br />
            스타벅스 소개
            <br />
            국내 뉴스룸
            <br />
            세계의 스타벅스
            <br />
            글로벌 뉴스룸
          </div>
          <div className="footerText">
            <span className="footerTitle">CORPORATE SALES</span>
            <br />
            단체 및 기업 구매 안내
          </div>
          <div className="footerText">
            <span className="footerTitle">PARTNERSHIP</span>
            <br />
            신규 입점 제의
            <br />
            협력 고객사 등록 신청
          </div>
          <div className="footerText">
            <span className="footerTitle">ONLINE COMMUNITY</span>
            <br />
            페이스북
            <br />
            트위터
            <br />
            유튜브
            <br />
            블로그
            <br />
            인스타그램
          </div>
          <div className="footerText">
            <span className="footerTitle">RECRUIT</span>
            <br />
            채용 소개
            <br />
            채용 지원하기
          </div>
          <div className="footerText">
            <span className="footerTitle">WEBUCKS</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
