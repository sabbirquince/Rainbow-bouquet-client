import React from "react";
import "./services.css";
import ServicesCard from "./ServicesCard/ServicesCard";

const Services = () => {
  return (
    <div className="my-container py-4 services">
      <p>Services</p>
      <h2>
        Choose from <br /> variety of plans
      </h2>

      <div class="py-5 ">
        <div class="row g-2">
          <div class="col-4">
            <ServicesCard />
          </div>

          <div class="col-4">
            <ServicesCard />
          </div>

          <div class="col-4">
            <ServicesCard />
          </div>

          <div class="col-4">
            <ServicesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
