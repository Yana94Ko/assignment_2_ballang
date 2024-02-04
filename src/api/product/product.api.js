const REACT_APP_BALLANG_PRODUCT_API = process.env.REACT_APP_BALLANG_PRODUCT_API;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const getProducts = async (type) => {
  const endpoints = {
    default: REACT_APP_BALLANG_PRODUCT_API,
  };
  console.log(endpoints[type]);
  const response = await fetch(endpoints[type], options);
  const data = await response.json();
  const products = data;

  return products;
};

const getProduct = async (itemId) => {
  const endpoint = `${REACT_APP_BALLANG_PRODUCT_API}/${itemId}`;
  const response = await fetch(endpoint, options);
  const product = await response.json();

  return product;
};

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
