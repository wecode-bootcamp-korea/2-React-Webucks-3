const getProducts = async () => {
  const url = 'http://localhost:3000/data/detailMockData.json';
  return fetch(url)
    .then(res => res.json())
    .catch(
      err => new Error('Failed to fetch JSON data or convert data to json')
    );
};

const getReviews = async () => {
  const url = 'http://localhost:3000/data/reviewListMockData.json';
  return fetch(url)
    .then(res => res.json())
    .catch(
      err => new Error('Failed to fetch JSON data or convert data to json')
    );
};

const getMenus = async () => {
  const url = 'http://localhost:3000/data/menuListMockData.json';
  return fetch(url)
    .then(res => res.json())
    .catch(
      err => new Error('Failed to fetch JSON data or convert data to json')
    );
};

export { getProducts, getReviews, getMenus };
