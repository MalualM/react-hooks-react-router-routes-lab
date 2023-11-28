import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function NavBar() {
  return <div>{/*{code here}*/}</div>;

function App() {

  return ( 
  <div>
    <NavBar />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path='/directors'>
        <Directors />
      </Route>
      <Route path='/actors'>
        <Actors />
      </Route>

    </Switch>
  </div>
  )
}

export default NavBar;