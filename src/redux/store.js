import { authReducer } from "./auth/reducer";
import {showReducer} from './show/showReducer'
import {bookReducer} from './book/bookReducer'
import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    auth:authReducer,
    show: showReducer,
    list: bookReducer
})
export const store = createStore(rootReducer,compose(applyMiddleware(thunk)))