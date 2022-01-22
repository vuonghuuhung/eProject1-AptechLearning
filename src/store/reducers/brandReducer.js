import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import {
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_BRAND_FAILURE,
} from "../actions/constants";

const initState = {
  loading: false,
  error: null,
  brandData: null,
};

const brandReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brandData: action.payload,
      };
    case GET_BRAND_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default brandReducer;
