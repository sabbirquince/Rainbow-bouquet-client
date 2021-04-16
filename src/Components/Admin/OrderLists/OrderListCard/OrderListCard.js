import React from "react";
import "./orderListCard.css";

const OrderListCard = ({ order, statChange, setStatChange }) => {
  const { email, name, service, status, _id } = order;

  const statusChange = (event, _id) => {
    const status = event.target.value;
    const setStatus = { _id, status };

    fetch("https://mighty-tundra-68939.herokuapp.com/setStatus", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(setStatus),
    })
      .then((res) => res.json())
      .then((data) => setStatChange(!statChange));
  };

  return (
    <div className="ol-card">
      <p>{name}</p>
      <p>{email}</p>
      <p>{service}</p>
      <p>Credit Card</p>
      <p>
        <select
          onChange={(event) => statusChange(event, _id)}
          className={
            status === "Pending"
              ? "form-select status status-pending"
              : status === "On Going"
              ? "form-select status status-onGoing"
              : "form-select status status-done"
          }
          aria-label="Default select example"
        >
          <option className="text-danger" selected>
            {status}
          </option>
          <option value="Pending">Pending</option>
          <option value="On Going">On Going</option>
          <option value="Done">Done</option>
        </select>
      </p>
    </div>
  );
};

export default OrderListCard;
