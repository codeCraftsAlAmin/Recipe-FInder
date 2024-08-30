import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h3>
        Recipe <span>Finder</span>
      </h3>

      <Link to={"/recipes"} className="rec_btn">
        view recipes
      </Link>
    </div>
  );
};

export default Home;
