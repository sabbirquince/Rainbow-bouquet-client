import React from "react";
import "./servicesCard.css";
import camera from "../../../../icons/photograph.png";
import camera2 from "../../../../icons/camera-operator (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const ServicesCard = () => {
  return (
    <div className="service-card mb-4">
      <div className="d-flex">
        <img className="img-fluid service-img" src={camera2} alt="" />
        <h4 className="align-self-center text-right service-head">
          Click to get service
        </h4>
      </div>
      <h5 className="py-3 service-head-sec">One day plan</h5>
      <div className="service-top">
        <p className="service-text">Full event coverage</p>
        <p className="service-text">Portrait for members</p>
        <p className="service-text">Event documentary</p>
        <p className="service-text">Distinct area photoshoot</p>
        <h5>$205</h5>
      </div>

      <div className="service-bottom">
        <FontAwesomeIcon className="service-icon" icon={faLongArrowAltRight} />
      </div>
    </div>
  );
};

export default ServicesCard;
