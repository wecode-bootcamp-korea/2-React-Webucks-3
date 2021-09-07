import React, { Component } from 'react';

import FooterMenuTitle from './FooterMenuTitle';
import FooterMenuContent from './FooterMenuContent';

import './Footer.scss';

class Footer extends Component {
  constructor() {
    super();
    this.state = { footerList: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/footerListMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ footerList: data.footerList });
      });
  }

  render() {
    const { footerList } = this.state;
    return (
      <footer className="Footer">
        <div className="footer-menus">
          {footerList.map(data => {
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
