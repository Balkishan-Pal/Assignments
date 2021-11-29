import { Link } from "react-router-dom"
import {useSelector} from 'react-redux'
export const Navbar = ()=>{
    const store = useSelector((store)=>store)
    console.log(store);
    return <div style={{
        display: "flex" ,height: 100, padding:"0px !important" ,marginBottom:"2%", 
        background : 'white',alignItems:'center', color:'white',justifyContent: 'space-evenly',
        border:"1px solid black", }}>
    <Link to="/">Dashboard</Link>
    <Link to="/about">About</Link>

    <Link to="/newshow">NewShows</Link>

    <Link to="/login">Login</Link>
    <Link to="/login">Booked Movie {store.list.list.length}</Link>

    </div>
}