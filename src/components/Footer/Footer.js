import React, { Component } from 'react';

import FooterMenuTitle from './FooterMenuTitle';
import FooterMenuContent from './FooterMenuContent';

import FOOTER_DATA from './footerMockData';

import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footer-menus">
          {FOOTER_DATA.map(data => {
            return (
              <ul key={data.id}>
                <FooterMenuTitle title={data.title} />
                {data.contents.map(content => {
                  return (
                    <FooterMenuContent
                      key={content.id}
                      content={content.contentName}
                    />
                  );
                })}
              </ul>
            );
          })}
        </div>
      </footer>
    );
  }
}

export default Footer;
