import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/scroller">Scroller Widget</Link>
      <Link to="/range">Range Widget</Link>
    </div>
  );
};

export default Home;
