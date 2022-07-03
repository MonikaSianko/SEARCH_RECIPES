import React, { useEffect } from "react";
import SectionHero from "../Sections/SectionHero/SectionHero";
import axios from "axios";

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
      <SectionHero />
    </div>
  );
};

export default HomePage;
