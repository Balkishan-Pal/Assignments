import { BOOK_SHOW_ERROR, BOOK_SHOW_LOADING, BOOK_SHOW_SUCESS } from "./actionType";

const initState = {
  loading: false,
  list: [],
  error: false,
};
export const bookReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case BOOK_SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case BOOK_SHOW_SUCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list,payload],
      };
    case BOOK_SHOW_ERROR:
      return {
        ...state,
        error: true,
      };
    default: return {...state}
  }
};