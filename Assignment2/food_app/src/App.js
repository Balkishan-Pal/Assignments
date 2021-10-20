import {Allbtns} from "./component/Allbtns"

import "./App.css"
import {Help} from "./component/Help"
import {Home} from "./component/Home"
import {Joinus} from "./component/Joinus"
import {Login} from "./component/Login"
import {Search} from "./component/Search"
import {Setting} from "./component/Setting"



function App() {
  return (
    <div>
    <div id ={"differentcomp"}>
      <Help></Help>
      <Home></Home>
      <Joinus></Joinus>
      <Login></Login>
      <Search></Search>
      <Setting></Setting>
    </div>

    <div id={"single"}>
        <Allbtns></Allbtns>
    </div>

    </div>
  );
}

export default App;
