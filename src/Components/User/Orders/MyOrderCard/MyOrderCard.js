import React from "react";
import "./myOrderCard.css";
import sampleImg from "../../../../icons/tripod.png";

const MyOrderCard = ({ order }) => {
  const { imgUrl, service, status, price, description } = order;

  return (
    <div className="user-order-card">
      <section className="uoc-top d-flex justify-content-between">
        <img className="uoc-img" src={imgUrl || sampleImg} alt="" />
        <h6
          className={
            status === "Pending"
              ? "uoc-status status-pending"
              : status === "On Going"
              ? "uoc-status status-onGoing"
              : "uoc-status status-done"
          }
        >
          {status}
        </h6>
      </section>

      <section className="uoc-bottom mt-4">
        <h4>{service}</h4>
        <p>
          {description?.one} | {description?.two} | {description?.three}
        </p>
        <h4 className="mt-2">${price}</h4>
      </section>
    </div>
  );
};

export default MyOrderCard;
