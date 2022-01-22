import { combineReducers } from "redux";
import productReducer from "./productReducer";
import brandReducer from "./brandReducer";
import userReducer from "./userReducer";

export default combineReducers({
  product: productReducer,
  brand: brandReducer,
  user: userReducer,
});
