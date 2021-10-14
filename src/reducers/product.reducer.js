/* eslint-disable import/no-anonymous-default-export */
import { productConstants } from "../actions/constants";

const initState = {
  products: [],
//   loading: false,
//   error: null,
};



export default (state =initState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;
    default:
  }
  return state;
};
