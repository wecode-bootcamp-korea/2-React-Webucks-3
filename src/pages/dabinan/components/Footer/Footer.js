import React, { Component } from 'react';
import FOOTER_DATA from './FooterData';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        {FOOTER_DATA.map((data, id) => {
          return (
            <div className="footerCategory" key={id}>
              <h3 className="footerListOuter">{data.id}</h3>
              <ul className="footerListInner">
                {data.list.map((list, id) => {
                  return <li key={id}>{list}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </footer>
    );
  }
}

export default Footer;
