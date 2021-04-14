import React from "react";
import Header from "./Header/Header";
import "./home.css";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Portfolio />
      <Services />
    </div>
  );
};

export default Home;
