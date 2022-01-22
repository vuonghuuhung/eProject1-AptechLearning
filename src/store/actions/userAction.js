import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  USER_LOGIN,
  USER_LOGOUT,
  USER_CREATE,
  createUserAPIs,
  getUserAPIs,
} from "./constants";

const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};
const userSuccess = (payload) => {
  return {
    type: USER_SUCCESS,
    payload,
  };
};

const userFailure = (payload) => {
  return {
    type: USER_FAILURE,
    payload,
  };
};

const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

const userFetch = (user) => {
  return async (dispatch) => {
    dispatch(userRequest);
    if (user.type === USER_LOGIN) {
      try {
        let res = await fetch(getUserAPIs, {
          method: "POST",
          body: JSON.stringify(user.info),
        });
        let resUser = await res.json();
        dispatch(userSuccess(resUser));
      } catch (error) {
        dispatch(userFailure(error));
      }
    } else if (user.type === USER_CREATE) {
      try {
        let res = await fetch(createUserAPIs, {
          method: "POST",
          body: JSON.stringify(user.info),
        });
        let resUser = await res.json();
        dispatch(userSuccess(resUser));
      } catch (error) {
        dispatch(userFailure(error));
      }
    }
  };
};
export { userFetch, userLogout };
