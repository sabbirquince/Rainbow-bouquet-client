import React from "react";
import "./TestimonialCard.css";
import person from "../../../../images/review(1).jpg";

const TestimonialCard = ({ reviewInfo }) => {
  const { photoURL, name, review } = reviewInfo;

  return (
    <div className="testimonial-card p-3">
      <div className="d-flex justify-content-between pb-3">
        <img className="img-fluid test-img" src={photoURL} alt="" />
        <div className="align-self-center text-right">
          <p>{name}</p>
          <small>Rostov, Denmark</small>
        </div>
      </div>

      <p>{review}</p>
      <p className="py-3">&hearts; &hearts; &hearts; &hearts;</p>
    </div>
  );
};

export default TestimonialCard;
