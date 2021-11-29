import { Link,Switch, Route } from "react-router-dom"
import { About } from "./About"
import { Login } from "./Login"
import { Home } from "./Home"
import { Dashboard } from "./Dashboard"
import { Newshows } from "./NewShow"
import "./routes.css"



export const Routes =()=>{
return(
    <div id="allroutes">
    <Link to= "/">Home</Link>
    <Link to = "/dashboard">DashBoard</Link>
    <Link to = "/newshows">NewShows</Link>
    <Link to = "/login">Login</Link>
    <Link to = "/about">About</Link>

 

    </div>
)
}