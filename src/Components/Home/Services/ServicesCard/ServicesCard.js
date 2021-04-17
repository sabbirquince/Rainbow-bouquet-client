import React from "react";
import "./servicesCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import defaultImg from "../../../../icons/photograph.png";
import { useHistory } from "react-router";

const ServicesCard = ({ service }) => {
  const {
    title,
    description1,
    description2,
    description3,
    imgUrl,
    price,
    _id,
  } = service;

  const history = useHistory();
  const checkoutService = () => {
    history.push(`/user/book/${_id}`);
  };

  return (
    <div onClick={checkoutService} className="service-card mb-4">
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
      </div>
      <h4 className="service-price">${price}</h4>

      <div className="service-bottom">
        <FontAwesomeIcon className="service-icon" icon={faLongArrowAltRight} />
      </div>
    </div>
  );
};

export default ServicesCard;
