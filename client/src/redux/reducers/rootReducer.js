import { combineReducers } from "redux";
import productDetailReducer from "./productDetailReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  productDetails: productDetailReducer,
  users: userReducer,
});

export default rootReducer;
