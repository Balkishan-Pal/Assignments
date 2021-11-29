import { Login } from "./Components/Login";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Newshows } from "./Components/NewShow";
import { Detail } from "./Components/Detail";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/newshow" exact>
          <Newshows />
        </Route>
        <Route path="/detail/:id" exact>
          <Detail />
        </Route>
        <Route>404.. no page found</Route>
      </Switch>
    </div>
  );
}

export default App;