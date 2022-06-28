import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleRecipeTile from "./Components/SingleRecipeTile/SingleRecipeTile";
import { recipe } from "./mocks/recipe.mock";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SingleRecipeTile recipe={recipe} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
