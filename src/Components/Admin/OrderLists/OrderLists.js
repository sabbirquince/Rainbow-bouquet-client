import React, { useEffect, useState } from "react";
import OrderListCard from "./OrderListCard/OrderListCard";
import "./orderLists.css";

const OrderLists = () => {
  const [orders, setOrders] = useState([]);
  const [statChange, setStatChange] = useState(false);

  useEffect(() => {
    fetch("https://mighty-tundra-68939.herokuapp.com/orderLists")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [statChange]);

  return (
    <div className="orderLists">
      <h3 className="admin-head">Order Lists</h3>

      <div className="orderLists-head">
        <h6>Name</h6>
        <h6>Email</h6>
        <h6>Service</h6>
        <h6>Paid with</h6>
        <h6>Status</h6>
      </div>

      <div className="orderLists-items">
        {orders.map((each) => (
          <OrderListCard
            order={each}
            key={each._id}
            statChange={statChange}
            setStatChange={setStatChange}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderLists;
