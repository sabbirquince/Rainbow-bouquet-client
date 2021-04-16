import React from "react";
import "./orderListCard.css";

const OrderListCard = ({ order }) => {
  const { email, name, service } = order;

  return (
    <div className="ol-card">
      <p>{name}</p>
      <p>{email}</p>
      <p>{service}</p>
      <p>Credit Card</p>
      <select class="form-select" aria-label="Default select example">
        <option selected>Pending</option>
        <option value="pending">pending</option>
        <option value="onGoing">On Going</option>
        <option value="done">done</option>
      </select>
    </div>
  );
};

export default OrderListCard;
