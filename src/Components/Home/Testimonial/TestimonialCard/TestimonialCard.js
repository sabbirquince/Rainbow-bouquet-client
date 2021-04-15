import React from "react";
import "./TestimonialCard.css";
import person from "../../../../images/review(1).jpg";

const TestimonialCard = () => {
  return (
    <div className="testimonial-card p-3">
      <div className="d-flex justify-content-between pb-3">
        <img className="img-fluid test-img" src={person} alt="" />
        <div className="align-self-center text-right">
          <p>Karen Philipelli</p>
          <small>Rostov, Denmark</small>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        voluptas fugiat molestiae illum itaque nemo nesciunt delectus, excepturi
        tempore corporis vero voluptate iste.
      </p>
      <p className="py-3">&hearts; &hearts; &hearts; &hearts;</p>
    </div>
  );
};

export default TestimonialCard;
