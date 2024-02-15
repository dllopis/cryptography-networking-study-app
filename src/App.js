import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import KeyTerms from "./components/KeyTerms";
import KeyTermsCarousel from "./components/KeyTermsCarousel";

import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import PrepareQuiz from "./components/PrepareQuiz";

const App = () => {
  return (
    <Router>
      <Switch>
      <NavigationBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapter/:chapter/flashcards" element={<KeyTermsCarousel chapter="1"/>} />
      <Route path="/chapter/:chapter" element={<KeyTerms chapter="1"/>} />
      <Route path="/chapter/:chapter/multiplechoicequiz" element={<PrepareQuiz chapter="1"/>} />
      </Routes>
      </Switch>
    </Router>
  );
};

export default App;