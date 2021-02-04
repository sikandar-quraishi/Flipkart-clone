import {
  CREATE_DETAIL,
  UPDATE_DETAIL,
  DELETE_DETAIL,
} from "../actions/actionTypes";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello!",
    contentm: "Hello guys!",
    user: "0",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  // {
  //   id: 1,
  //   title: "Learn React Two",
  //   description:
  //     "Holisticly productize B2C vortals rather than frictionless vortals Professionally seize",
  // },
  // {
  //   id: 2,
  //   title: "Learn React Three",
  //   description:
  //     "Holisticly productize B2C vortals rather than frictionless vortals Professionally seize",
  // },
];

// Use the initialState as a default value
export const productDetailReducer = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case CREATE_DETAIL:
      return [...state, action.payload];
    case UPDATE_DETAIL:
      return state.map((detail) => {
        if (detail.id === action.payload.id) {
          return action.payload;
        } else {
          return detail;
        }
      });
    case DELETE_DETAIL:
      console.log("state:", state);
      return state.filter((detail) => detail.id !== action.payload);

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};

export default productDetailReducer;
