import {
  CREATE_DETAIL,
  UPDATE_DETAIL,
  DELETE_DETAIL,
  FETCH_DETAILS,
  FETCH_DETAIL,

} from "../actions/actionTypes";

const initialState = {
  details: [],
  item: [],
};

export const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

      case FETCH_DETAIL:
        return {
          ...state,
          details: [action.payload], 
        };

    case CREATE_DETAIL:
      return {
        ...state,
        details: [...state.details, action.payload],
      };

    case UPDATE_DETAIL:
      return {
        ...state,
        details: state.details.map((detail) => detail.id === action.payload.id ? action.payload : detail)
        // details: state.details.map((detail) => {
        //   if (detail.id === action.payload.id) {
        //     return action.payload
        //   } else {
        //     return detail;
        //   }
        // })
      };

    case DELETE_DETAIL:
      return {
        ...state,
        details: state.details.filter((detail) => detail.id !== action.payload),
      };

    default:
      return state;
  }
};


export default productDetailReducer;
