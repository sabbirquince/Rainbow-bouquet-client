import React from "react";
import Header from "./Header/Header";
import "./home.css";
import Portfolio from "./Portfolio/Portfolio";
import ProIntro from "./ProIntroduction/ProIntro";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Portfolio />
      <Services />
      <Testimonial />
      <ProIntro />
    </div>
  );
};

export default Home;
