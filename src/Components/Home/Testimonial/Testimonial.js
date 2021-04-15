import React from "react";
import "./testimonial.css";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="my-container py-5">
      <p style={{ fontSize: "1.2rem" }}>Testimonials</p>
      <h2 className="mb-4">
        What our clients <br /> have to say
      </h2>

      <div class="">
        <div class="row g-2">
          <div class="col-4">
            <TestimonialCard />
          </div>
          <div class="col-4">
            <TestimonialCard />
          </div>
          <div class="col-4">
            <TestimonialCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
