import {
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_BRAND_FAILURE,
  getBrandAPIs,
} from "./constants";

const getBrandRequest = () => {
  return {
    type: GET_BRAND_REQUEST,
  };
};
const getBrandSuccess = (payload) => {
  return {
    type: GET_BRAND_SUCCESS,
    payload,
  };
};

const getBrandFailure = (payload) => {
  return {
    type: GET_BRAND_FAILURE,
    payload,
  };
};

const getBrandFetch = () => {
  return async (dispatch) => {
    dispatch(getBrandRequest);
    try {
      let res = await fetch(getBrandAPIs);
      let resBrand = await res.json();
      dispatch(getBrandSuccess(resBrand));
    } catch (error) {
      dispatch(getBrandFailure(error));
    }
  };
};
export default getBrandFetch;
