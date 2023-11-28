import React from "react";
import { movies } from "../data";
import { NavLink } from "react-router-dom";

function Movies() {
  return <div>{/*{code here}*/}</div>;
}

export default Movies;
const NavBar = () => {
  return (

    <div className="navbar">


      <NavLink to="/">Home Page  </NavLink>
      <NavLink to="/movies">Movies Page  </NavLink>
      <NavLink to="/directors">Directors Page  </NavLink>
      <NavLink to="/actors">Actors Page  </NavLink>


    </div>

  );
};

export default NavBar;