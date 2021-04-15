import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./msCard.css";
import { useState } from "react";

const MsCard = ({ service, setDeleted, deleted }) => {
  const { title, price, _id } = service;

  const handleServiceDelete = (id) => {
    fetch(`https://mighty-tundra-68939.herokuapp.com/deleteService?id=${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setDeleted(!deleted));
  };

  return (
    <div className="ms-card">
      <h6>{title}</h6>
      <h6>${price}</h6>
      <h6
        style={{ cursor: "pointer" }}
        onClick={() => handleServiceDelete(_id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </h6>
    </div>
  );
};

export default MsCard;
