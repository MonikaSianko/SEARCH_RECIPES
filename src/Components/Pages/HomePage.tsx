import React, { useEffect } from "react";
import BoxHero from "../Boxes/BoxHero/BoxHero";
import axios from "axios";
import BoxFilters from "../Boxes/BoxFilters/BoxFilters";

const HomePage: React.FC = (): JSX.Element => {
  const options = {
    method: "GET",
    url: "https://api.spoonacular.com/recipes/random",
    params: {
      apiKey: "ade2916467734cc29140dfc075d7e1fb",
      number: "1",
      tags: "vegetarian, desert",
    },
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getRandomRecipes = (): void => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    // getRandomRecipes();
  }, []);

  return (
    <div>
      <BoxHero />
      <BoxFilters />
    </div>
  );
};

export default HomePage;
