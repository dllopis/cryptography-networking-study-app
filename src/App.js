import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import KeyTerms from "./components/KeyTerms";
import KeyTermsCarousel from "./components/KeyTermsCarousel";

import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import PrepareQuiz from "./components/PrepareQuiz";
import CeaserCipher from "./components/ciphers/CeaserCipher";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapter/:chapter" element={<KeyTerms chapter="1"/>} />
      <Route path="/chapter/:chapter" element={<KeyTerms chapter="2"/>} />
      <Route path="/chapter/:chapter/flashcards" element={<KeyTermsCarousel chapter="1"/>} />
      <Route path="/chapter/:chapter/flashcards" element={<KeyTermsCarousel chapter="2"/>} />
      <Route path="/chapter/:chapter/multiplechoicequiz" element={<PrepareQuiz chapter="1"/>} />
      <Route path="/ciphers/:ceaser-cipher" element={<CeaserCipher />} />
      </Routes>
    </Router>
  );
};

export default App;