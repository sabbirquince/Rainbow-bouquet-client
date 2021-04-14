import React from "react";
import "./portfolio.css";
import PortfolioCard from "./PortfolioCard/PortfolioCard";

const Portfolio = () => {
  return (
    <div className="portfolio my-container py-5">
      <div>
        <p>Portfolio</p>
        <h2>
          Explore our latest <br /> event projects
        </h2>
      </div>

      <div class="py-3">
        <div class="row g-2">
          <div class="col-4">
            <PortfolioCard />
          </div>
          <div class="col-4">
            <PortfolioCard />
          </div>
          <div class="col-4">
            <PortfolioCard />
          </div>
          <div class="col-4">
            <PortfolioCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
