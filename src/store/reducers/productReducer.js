import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from "../actions/constants";

const initState = {
  loading: false,
  error: null,
  productData: null,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productData: action.payload,
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
