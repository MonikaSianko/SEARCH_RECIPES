import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleRecipeTile from "./Components/Shared/SingleRecipeTile/SingleRecipeTile";
import { recipe } from "./mocks/recipe.mock";
import "./App.css";
import SectionHero from "./Components/Sections/SectionHero/SectionHero";
import HomePage from "./Components/Pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
