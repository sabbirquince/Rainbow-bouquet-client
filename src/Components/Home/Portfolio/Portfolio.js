import React from "react";
import "./portfolio.css";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import image1 from "../../../images/header2.jpg";
import image2 from "../../../images/header7.jpg";
import image3 from "../../../images/header8.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      image: image1,
      title: "Gulshan Wedding",
      type: "Wedding",
      date: "27 March, 21",
    },
    {
      image: image2,
      title: "NDC 15th Batch Reunion",
      type: "Reunion",
      date: "12 Feb, 21",
    },
    {
      image: image3,
      title: "JU fresher's reception",
      type: "reception",
      date: "28 Feb, 21",
    },
  ];

  return (
    <div className="portfolio my-container py-5">
      <div>
        <p>Portfolio</p>
        <h2>
          Explore our latest <br /> event projects
        </h2>
      </div>

      <div class="py-5">
        <div class="row g-2">
          {portfolio.map((each, index) => (
            <div class="col-4">
              <PortfolioCard portfolio={each} index={index} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
