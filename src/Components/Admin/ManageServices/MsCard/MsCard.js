import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./msCard.css";

const MsCard = ({ service }) => {
  const { title, price } = service;

  return (
    <div className="ms-card">
      <h6>{title}</h6>
      <h6>${price}</h6>
      <h6>
        <FontAwesomeIcon icon={faTrash} />
      </h6>
    </div>
  );
};

export default MsCard;
