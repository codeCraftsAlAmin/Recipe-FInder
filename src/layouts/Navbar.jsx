import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to={"/"} className="nav_link">
          Home
        </Link>
        <Link to={"/recipes"} className="nav_link">
          Menu
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
