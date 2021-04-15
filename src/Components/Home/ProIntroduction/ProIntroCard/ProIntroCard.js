import React from "react";
import "./proIntroCard.css";
import pro from "../../../../images/review(3).jpg";

const ProIntroCard = () => {
  return (
    <div className="card pro-intro-card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img className="pro-intro-img img-fluid" src={pro} alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Joanna Barrett</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
