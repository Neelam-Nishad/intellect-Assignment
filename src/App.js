import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Range from "./components/Range";
import Scroller from "./components/Scroller";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scroller" element={<Scroller />} />
          <Route path="/range" element={<Range />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
