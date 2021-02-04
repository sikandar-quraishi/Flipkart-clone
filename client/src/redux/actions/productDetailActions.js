import { CREATE_DETAIL, UPDATE_DETAIL, DELETE_DETAIL } from "./actionTypes";
import { nanoid } from "nanoid";

export const createDetail = (title, content, contentm, user) => {
  const id = nanoid();
  const date = new Date().toISOString();
  return {
    type: CREATE_DETAIL,
    payload: { id, title, content, contentm, user, date },
  };
};

// export const createDetail = (payload) => {
//   return {
//     type: CREATE_DETAIL,
//     payload: payload,
//   };
// };

export const updateDetail = (id) => {
  return {
    type: UPDATE_DETAIL,
    payload: id,
  };
};

export const deleteDetail = (id) => {
  return {
    type: DELETE_DETAIL,
    payload: id,
  };
};
