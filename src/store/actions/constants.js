const USER_REQUEST = "GET_USER_REQUEST";
const USER_SUCCESS = "GET_USER_SUCCESS";
const USER_FAILURE = "GET_USER_FAILURE";
const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT";
const USER_CREATE = "USER_CREATE";
const getUserAPIs = "http://localhost/eProject1/server/api/user/userLogin.php";
const createUserAPIs =
  "http://localhost/eProject1/server/api/user/createNewUser.php";

const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";
const getProductAPIs =
  "http://localhost/eProject1/server/api/product/getAllProducts.php";

const GET_BRAND_REQUEST = "GET_BRAND_REQUEST";
const GET_BRAND_SUCCESS = "GET_BRAND_SUCCESS";
const GET_BRAND_FAILURE = "GET_BRAND_FAILURE";
const getBrandAPIs =
  "http://localhost/eProject1/server/api/brand/getAllBrand.php";

export {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  USER_LOGIN,
  USER_LOGOUT,
  USER_CREATE,
  createUserAPIs,
  getUserAPIs,
};
export {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  getProductAPIs,
};

export {
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_BRAND_FAILURE,
  getBrandAPIs,
};
