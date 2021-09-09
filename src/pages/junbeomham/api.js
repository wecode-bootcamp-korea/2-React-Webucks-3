const jsonUrl = {
  list: { coffeeCards: 'http://localhost:3000/data/coffeeCardMockData.json' },
  footer: { footerData: 'http://localhost:3000/data/footerListMockData.json' },
  detail: {
    products: 'http://localhost:3000/data/detailMockData.json',
    reviews: 'http://localhost:3000/data/reviewListMockData.json',
    menus: 'http://localhost:3000/data/menuListMockData.json',
  },
};

const getUrls = key => {
  return jsonUrl[key];
};

export default getUrls;
