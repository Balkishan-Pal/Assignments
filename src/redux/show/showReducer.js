import {
    DETAIL_SHOW_ERROR,
    DETAIL_SHOW_LOADING,
    DETAIL_SHOW_SUCESS,
    GET_SHOW_ERROR,
    GET_SHOW_LOADING,
    GET_SHOW_SUCESS,
  } from "./actionTypes";
  
  const initState = {
    loading: false,
    data: [],
    error: false,
  };
  export const showReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_SHOW_LOADING:
        return {
          ...state,
          loading: true,
        };
      case GET_SHOW_SUCESS:
        return {
          ...state,
          loading: false,
          data: payload,
        };
      case GET_SHOW_ERROR:
        return {
          ...state,
          error: true,
        };
      case DETAIL_SHOW_LOADING:
        return {
          ...state,
          loading: true,
        };
      case DETAIL_SHOW_SUCESS:
        return {
          ...state,
          loading: false,
          detail: payload,
        };
      case DETAIL_SHOW_ERROR:
        return {
          ...state,
          error: true,
        };
  
  
      default:
        return { ...state };
    }
  };