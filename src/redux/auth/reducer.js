import {LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCESS} from './actionType'
let initState = {
    loading:false,
    token:'',
    error:false
}
export const authReducer  = (state = initState,{type,payload})=>{
    switch (type) {
        case LOGIN_LOADING:
            return{
                ...state,
                loading:true
            }
        case LOGIN_SUCESS:
            return{
                ...state,
                loading:false,
                token:payload
            }
        case LOGIN_ERROR:
            return{
                ...state,
                loading:false,
                error:true
            }
        default:
        return {...state}
    }
}