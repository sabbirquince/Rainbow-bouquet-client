import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./services.css";
import ServicesCard from "./ServicesCard/ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://mighty-tundra-68939.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-container py-4 services">
      <p>Services</p>
      <h2>
        Choose from <br /> variety of plans
      </h2>

      <div className="py-3 py-md-5">
        <div className="row g-2">
          {services.map((each, index) => (
            <div className="col-12 col-sm-6 col-lg-4">
              <ServicesCard service={each} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
