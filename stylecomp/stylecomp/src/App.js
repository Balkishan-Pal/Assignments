import logo from './logo.svg';
import './App.css';
import Forms from "./components/Form"
// import { Children } from 'react';
import {Navbar ,Logo,Contentdiv,A} from "./components/Buttonn"


function App() {
  return (
    <div className="App">

  <Navbar>
  <Logo>  <img height= "60px" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"></img></Logo>
 
    <Contentdiv>
      <A href="https://google.com">Login</A>
      <A href="https://google.com">Signup</A>
      <A href="https://google.com">Help</A>
    </Contentdiv>
  </Navbar>


    {/* <Forms onSubmit={(e)=>{
      e.preventDefault()
      console.log("clicked on  button")
    }}>
  
      <input type="email" placeholder="Email"></input>
      <input type="password" placeholder="Password"></input>
      <input type="submit" value="Submit"></input>
  
    </Forms>




    <Forms>
  
  <input type="email" placeholder="Email"></input>
  <input type="password" placeholder="Password"></input>
  <input type="number" placeholder="Mobile no"></input>
  <input type="text" placeholder="username"></input>
  <input type="submit" value="Submit"></input>
  
</Forms> */}



    </div>
  );
}

export default App;
