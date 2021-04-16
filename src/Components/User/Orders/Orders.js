import React, { useContext, useEffect, useState } from "react";
import "./orders.css";

import { LoginContext } from "../../../App";
import MyOrderCard from "./MyOrderCard/MyOrderCard";

const Orders = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const [myOrders, setMyOrders] = useState([]);
  console.log(myOrders);

  useEffect(() => {
    fetch(
      `https://mighty-tundra-68939.herokuapp.com/myOrders?email=${loggedIn.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [loggedIn]);

  return (
    <div>
      <h3 className="admin-head">Your orders</h3>

      <div className="user-orders row pt-3">
        {myOrders.map((each) => (
          <div className="col-lg-4">
            <MyOrderCard order={each} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
