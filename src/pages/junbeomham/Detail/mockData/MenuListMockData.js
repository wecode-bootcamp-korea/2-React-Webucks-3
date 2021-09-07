const MENU_LIST = [
  {
    id: 1,
    parentId: 0,
    level: 1,
    name: '홈',
    path: '/',
    children: null,
  },
  {
    id: 2,
    parentId: 1,
    level: 2,
    name: 'MENU',
    path: '/menu/',
    children: null,
  },
  {
    id: 3,
    parentId: 2,
    level: 3,
    name: '음료',
    path: '/menu/drink/',
    children: null,
  },
  {
    id: 4,
    parentId: 3,
    level: 4,
    name: '콜드브루',
    path: '/menu/drink/coldbrew/',
    children: null,
  },
  {
    id: 5,
    parentId: 4,
    level: 5,
    name: '시그니처 더 블랙 콜드 브루',
    path: 'detail-junbeom',
    children: null,
  },
];

export default MENU_LIST;
