import {GET_SHOW_ERROR, GET_SHOW_LOADING, GET_SHOW_SUCESS} from './actionTypes'
export const getShowLoading = ()=>({type:GET_SHOW_LOADING})
export const getShowSucess = (data)=> ({type:GET_SHOW_SUCESS,payload:data})
export const getShowError = ()=>({type:GET_SHOW_ERROR})

export const detailsShowLoading = ()=>({type:GET_SHOW_LOADING})
export const detailsShowSucess = (data)=> ({type:GET_SHOW_SUCESS,payload:data})
export const detailsShowError = ()=>({type:GET_SHOW_ERROR})
