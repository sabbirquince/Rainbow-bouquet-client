import React from "react";
import "./portfolioCard.css";

const PortfolioCard = ({ portfolio, index }) => {
  const { image, title, type, date } = portfolio;

  return (
    <div className="portfolio-card">
      <p className="text-right">{index + 1}</p>
      <div className="port-img-box">
        <img className="img-fluid port-img" src={image} alt="" />
      </div>
      <h5>{title}</h5>
      <p>{type}</p>
      <small>{date}</small>
    </div>
  );
};

export default PortfolioCard;
