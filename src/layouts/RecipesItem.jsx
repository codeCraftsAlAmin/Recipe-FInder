import React from "react";
import Item from "./Item";

const RecipesItem = ({ recipes, isLoading, isVisible, setIsVisible }) => {
  const showItem = () => {
    setIsVisible((prev) => prev + 6);
  };
  return isLoading ? (
    <p className="loading">Loading...</p>
  ) : (
    <div>
      <div className="card_container">
        {recipes &&
          recipes.slice(0, isVisible).map((item, index) => {
            return (
              <div key={index}>
                <Item isLoading={isLoading} item={item} />
              </div>
            );
          })}
      </div>
      {isVisible < recipes.length && (
        <button className="see_more_btn" onClick={showItem}>
          See More <i class="ri-arrow-down-wide-line"></i>
        </button>
      )}
    </div>
  );
};

export default RecipesItem;
