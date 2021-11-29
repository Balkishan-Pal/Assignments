import { BOOK_SHOW_LOADING,BOOK_SHOW_SUCESS,BOOK_SHOW_ERROR } from "./actionType"
export const bookShowLoading = ()=>({type:BOOK_SHOW_LOADING})
export const bookShowSucess = (data)=> ({type:BOOK_SHOW_SUCESS,payload:data})
export const bookShowError = ()=>({type:BOOK_SHOW_ERROR})