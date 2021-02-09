import {
  CREATE_DETAIL,
  UPDATE_DETAIL,
  DELETE_DETAIL,
  FETCH_DETAIL,
  FETCH_DETAILS,
} from "./actionTypes";
import apiReduxUrl from "../../api/apiReduxUrl";

export const fetchDetails = () => {
  return async (dispatch) => {
    const response = await apiReduxUrl.get("/flipkart");
    dispatch({ type: FETCH_DETAILS, payload: response.data });
  };
};

export const fetchDetail = (id) => {
  return async (dispatch) => {
    const response = await apiReduxUrl.get(`/flipkart/${id}`);
    dispatch({ type: FETCH_DETAIL, payload: response.data });

    // const stateAfter = getState()
    // debugger
    // console.log("Data by Id", stateAfter.productDetails.details)
  };
};

export const createDetail = (initialState) => {
  return async (dispatch) => {
    const response = await apiReduxUrl.post("/flipkart", initialState);
    dispatch({ type: CREATE_DETAIL, payload: response.data });
  };
};


export const updateDetail = (id, initialState) => {
  return async (dispatch) => {
    const response = await apiReduxUrl.put(`/flipkart/${id}`, initialState);
    dispatch({ type: UPDATE_DETAIL, payload: response.data });
  };
};

export const deleteDetail = (id) => async (dispatch) => {
  await apiReduxUrl.delete(`/flipkart/${id}`);
  dispatch({ type: DELETE_DETAIL, payload: id });
};

// export const createDetail = (title, content, contentm, user) => {
//   const id = nanoid();
//   const date = new Date().toISOString();
//   return {
//     type: CREATE_DETAIL,
//     payload: { id, title, content, contentm, user, date },
//   };
// };

// export const createDetail = (payload) => {
//   return {
//     type: CREATE_DETAIL,
//     payload: payload,
//   };
// };

// export const updateDetail = (id) => {
//   return {
//     type: UPDATE_DETAIL,
//     payload: id,
//   };
// };

// export const deleteDetail = (id) => {
//   return {
//     type: DELETE_DETAIL,
//     payload: id,
//   };
// };
