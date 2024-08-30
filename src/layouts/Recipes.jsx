import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipes } from "../services/api";
import RecipesItem from "./RecipesItem";
import Search from "./Search";

const Recipes = () => {
  const [searchedQuery, setSearchedQuery] = useState("pizza");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipesItem();
  }, [searchedQuery]);

  const getRecipesItem = async () => {
    const result = await getRecipes(searchedQuery);
    if (result && result.length > 0) {
      setRecipes(result);
    } else {
      navigate("/error");
    }
    setIsLoading(false);
  };
  return (
    <div className="recipes">
      <h3>Search Your Recipes</h3>

      <div className="recipes_menu">
        <Search setSearchedQuery={setSearchedQuery} />
        <RecipesItem
          isLoading={isLoading}
          recipes={recipes}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      </div>
    </div>
  );
};

export default Recipes;
