import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<SearchResults />} path="/:query"></Route>
      </Routes>
    </Router>
  );
}

export default App;
