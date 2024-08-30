import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipe } from "../services/api";

const NewItem = () => {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getRecipeItem();
  }, []);

  const getRecipeItem = async () => {
    const result = await getRecipe(recipeId);
    if (result) {
      setRecipe(result);
    }
  };

  return Object.keys(recipe).length > 0 ? (
    <div className="item_menu">
      <div className="item_container">
        <div className="item_card">
          <div className="item_img">
            <img src={recipe.image_url} alt="" />
          </div>

          <div className="item_content">
            <h3>{recipe.title}</h3>
            <p>Social Rank:- {recipe.social_rank}</p>
            <h4>
              <span>Ingredients</span> For the Dough: 2 ¼ teaspoons (1 packet)
              active dry yeast 1 ½ cups warm water (110°F) 3 ½ to 4 cups
              all-purpose flour 2 tablespoons olive oil 2 teaspoons sugar 1
              teaspoon salt
            </h4>
            <Link
              className="item_btn"
              to={recipe.publisher_url}
              target="_blank"
            >
              Publisher URL
            </Link>
            <Link className="item_btn" to={"/recipes"}>
              Back To Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default NewItem;
