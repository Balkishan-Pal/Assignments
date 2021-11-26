import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './Components/Navbar'
import { Home } from './Components/Home'
import { Services } from './Components/Services';
import { Contact } from './Components/Contact';
import { About } from './Components/About';
import { Login } from './Components/Login';

function App() {
  return (
   <BrowserRouter>
   <div style={{textAlign: 'center'}}>
   <NavBar />
   
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/services'>
        <Services />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
      <Route exact path='/aboutus'>
        <About />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      </Switch>
      </div>
   </BrowserRouter>
  )
}

export default App