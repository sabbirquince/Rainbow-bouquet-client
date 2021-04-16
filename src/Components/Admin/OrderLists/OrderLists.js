import React, { useEffect, useState } from "react";
import OrderListCard from "./OrderListCard/OrderListCard";
import "./orderLists.css";

const OrderLists = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4060/orderLists")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

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
          <OrderListCard order={each} />
        ))}
      </div>
    </div>
  );
};

export default OrderLists;
