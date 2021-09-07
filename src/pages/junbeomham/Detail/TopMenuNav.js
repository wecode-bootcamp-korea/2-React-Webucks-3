import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './TopMenuNav.scss';

class TopMenuNav extends Component {
  getParentMenu = parentId => {
    const { menuList } = this.props;
    for (let menu of menuList) {
      if (menu.id === parentId) {
        return menu;
      }
    }
  };

  render() {
    const { path, name } = this.props;

    let menuId = this.props.parentId;
    const topMenus = [];
    while (menuId > 0) {
      let parentMenu = this.getParentMenu(menuId);
      topMenus.unshift(parentMenu);
      menuId = parentMenu.parentId;
    }

    return (
      <ul>
        {topMenus.map(topMenu => {
          return (
            <React.Fragment key={topMenu.id}>
              <li>
                <Link className="topMenu" to={topMenu.path}>
                  {topMenu.name}
                </Link>
              </li>
              <li>
                <img
                  alt="arrow"
                  src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
                />
              </li>
            </React.Fragment>
          );
        })}
        <li>
          <Link className="currentMenu" to={path}>
            {name}
          </Link>
        </li>
      </ul>
    );
  }
}

export default TopMenuNav;
