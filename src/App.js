import logo from './logo.svg';

import {BrowserRouter, Route} from "react-router-dom"
import VendingMachine from "./VendingMachine"
import Skittles from "./Skittles"
import Hersheys from "./Herysheys"
import Starbursts from "./Starbursts"
import NavBar from "./NavBar"


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar />
          <Route exact path="/">
              <VendingMachine />
          </Route>
          <Route exact path ="/skittles">
              <Skittles />
          </Route>
          <Route exact path ="/hersheys">
              <Hersheys />
          </Route>
          <Route exact path ="/starbursts">
              <Starbursts />
          </Route>
        </BrowserRouter>

    </div>
  );
}

export default App;
