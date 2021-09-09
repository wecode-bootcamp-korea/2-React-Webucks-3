const getProductsAndSetstate = component => {
  const url = 'http://localhost:3000/data/detailMockData.json';
  fetch(url)
    .then(res => res.json())
    .then(data => component.setState({ product: data.data[0] }));
};

const getReviewsAndSetstate = component => {
  const url = 'http://localhost:3000/data/reviewListMockData.json';
  return fetch(url)
    .then(res => res.json())
    .then(data => component.setState({ reviewList: data.reviews }));
};

const getMenusAndSetstate = component => {
  const url = 'http://localhost:3000/data/menuListMockData.json';
  return fetch(url)
    .then(res => res.json())
    .then(data => component.setState({ menuList: data.menus }));
};

export { getProductsAndSetstate, getReviewsAndSetstate, getMenusAndSetstate };
