import React, { useEffect, useState } from "react";
import "./testimonial.css";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://mighty-tundra-68939.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-container py-5">
      <p style={{ fontSize: "1.2rem" }}>Testimonials</p>
      <h2 className="mb-4">
        What our clients <br /> have to say
      </h2>

      <div>
        <div className="row g-2">
          {reviews.map((each, index) => (
            <div key={index} className="col-4">
              <TestimonialCard reviewInfo={each} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
