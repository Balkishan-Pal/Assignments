import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"



const PrivateRoute = ({children,path}) => {
    const isAuth = useSelector(store=>store.isAuth)

    if(!isAuth){
        return <Redirect to="/login" />
    }

    return (
        <Route path={path}>
            {children}
        </Route>
    )
}

export {PrivateRoute}