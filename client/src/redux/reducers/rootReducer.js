import { combineReducers } from "redux";
import productDetailReducer from "./productDetailReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
  productDetails: productDetailReducer,
  users: userReducer,
});


// export const selectAllDetails = state => state.productDetails
// export const selectDetailById = (state, Id) => state.productDetails.details.find((detail) => detail.id === Id);


export default rootReducer;
