import React from "react";
import portfolioImg from "../../../../images/header8.jpg";
import "./portfolioCard.css";

const PortfolioCard = () => {
  return (
    <div className="portfolio-card">
      <p className="text-right">1</p>
      <img className="img-fluid" src={portfolioImg} alt="" />
      <h5>REMIAN Reunion</h5>
      <p>Reuinion</p>
      <small>27 March, 2021</small>
    </div>
  );
};

export default PortfolioCard;
