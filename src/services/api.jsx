import axios from "axios";

export const getRecipes = async (searchedQuery) => {
  try {
    const res = await axios.get(
      `https://forkify-api.herokuapp.com/api/search?q=${searchedQuery}`
    );
    return res.data.recipes;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const getRecipe = async (searchedQuery) => {
  try {
    const res = await axios.get(
      `https://forkify-api.herokuapp.com/api/get?rId=${searchedQuery}`
    );
    return res.data.recipe;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};
