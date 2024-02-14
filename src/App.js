import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import KeyTerms from "./components/KeyTerms";
import KeyTermsCarousel from "./components/KeyTermsCarousel";

import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import PrepareQuiz from "./components/PrepareQuiz";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptography-networking-study-app/" element={<Home />} />
        <Route path="/Chapter/1/flashcards" element={<KeyTermsCarousel chapter="1" />} />
        <Route path="/Chapter/1" element={<KeyTerms chapter="1" />} />
        <Route path="/Chapter/1/multiplechoicequiz" element={<PrepareQuiz chapter="1" />} />
      </Routes>
    </Router>
  );
};

export default App;