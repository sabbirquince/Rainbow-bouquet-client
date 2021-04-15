import React from "react";
import "./servicesCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import defaultImg from "../../../../icons/photograph.png";

const ServicesCard = ({ service }) => {
  const { title, description1, description2, description3, imgUrl } = service;

  return (
    <div className="service-card mb-4">
      <div className="d-flex">
        <img
          className="img-fluid service-img"
          src={imgUrl || defaultImg}
          alt=""
        />
        <h4 className="align-self-center text-right service-head">
          Click to get service
        </h4>
      </div>
      <h5 className="py-3 service-head-sec">{title}</h5>
      <div className="service-top">
        <p className="service-text">{description1}</p>
        <p className="service-text">{description2 || "..."}</p>
        <p className="service-text">{description3 || "..."}</p>
        {title === "One Day Plan" && <h5>$249</h5>}
        {title === "Two Day Plan" && <h5>$339</h5>}
        {title === "Up to week Plan" && <h5>$599</h5>}
      </div>

      <div className="service-bottom">
        <FontAwesomeIcon className="service-icon" icon={faLongArrowAltRight} />
      </div>
    </div>
  );
};

export default ServicesCard;
