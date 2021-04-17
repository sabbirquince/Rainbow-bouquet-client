import React from "react";
import "./proIntroCard.css";

const ProIntroCard = ({ proImg }) => {
  return (
    <div className="card pro-intro-card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4 pro-img-box">
          <img className="pro-intro-img img-fluid" src={proImg} alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Joanna Barrett</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              molestiae labore voluptas vero praesentium.
            </p>
            <p className="card-text">
              <small className="text-muted">3 years of experience</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProIntroCard;
