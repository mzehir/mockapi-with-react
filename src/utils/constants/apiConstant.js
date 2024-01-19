export const HTTP_TYPE = {
  POST: { key: "post" },
  GET: { key: "get" },
  DELETE: { key: "delete" },
  PUT: { key: "put" },
};

export const API_PATH = {
  GET_PRODUCTS: {
    path: "products",
  },

  GET_PRODUCT_DETAIL: {
    path: "products",
  },
};

export const apiPathReturn = () => {
  return Object.entries(API_PATH).reduce((result, [key, value]) => {
    result[key] = { path: value.path };
    return result;
  }, {});
};
