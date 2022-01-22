import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  USER_LOGOUT,
} from "../actions/constants";

const initState = {
  isLoggedIn: false,
  loading: false,
  error: null,
  userData: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_SUCCESS:
      if (action.payload.errCode === 0) {
        return {
          ...state,
          loading: false,
          userData: action.payload,
          isLoggedIn: true,
          error: null,
        };
      } else {
        return {
          ...state,
          isLoggedIn: false,
          loading: false,
          error: action.payload.message,
        };
      }
    case USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        isLoggedIn: false,
        loading: false,
        error: null,
        userData: null,
      };
    default:
      return state;
  }
};

export default userReducer;
