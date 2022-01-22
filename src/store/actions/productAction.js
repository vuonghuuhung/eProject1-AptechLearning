import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  getProductAPIs,
} from "./constants";

const getProductRequest = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  };
};
const getProductSuccess = (payload) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload,
  };
};
const getProductFailure = (payload) => {
  return {
    type: GET_PRODUCT_FAILURE,
    payload,
  };
};
const getProductFetch = () => {
  return async (dispatch) => {
    dispatch(getProductRequest);
    try {
      let res = await fetch(getProductAPIs);
      let resProduct = await res.json();
      dispatch(getProductSuccess(resProduct));
    } catch (error) {
      dispatch(getProductFailure(error));
    }
  };
};

export default getProductFetch;
