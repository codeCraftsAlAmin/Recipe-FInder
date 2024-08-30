import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  console.log(item);
  return (
    <div className="card_menu">
      <div className="card_container">
        <div className="card">
          <div className="card_img">
            <img src={item.image_url} alt="" />
          </div>

          <div className="card_content">
            <h3>{item.title}</h3>
            <p>{item.publisher}</p>
            <Link
              className="link_btn first"
              to={item.source_url}
              target="_blank"
            >
              Recipe URL
            </Link>
            <Link className="link_btn second" to={`/recipes/${item.recipe_id}`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
