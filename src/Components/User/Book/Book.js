import React from "react";
import "./book.css";
import { useForm } from "react-hook-form";
import StripePayment from "../StripePayment/StripePayment";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../../../App";

const Book = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [toPay, setToPay] = useState(false);
  const [booked, setBooked] = useState(false);
  const [loadService, setLoadService] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4060/getService?id=${id}`)
      .then((res) => res.json())
      .then((data) => setLoadService(data[0]));
  }, [id]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [serviceInfo, setServiceInfo] = useState(null);
  console.log(serviceInfo);

  const onSubmit = (data) => {
    setServiceInfo(data);
  };

  return (
    <div className="book">
      <h3 className="admin-head">Add service</h3>

      <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control mb-2"
          placeholder="name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-warning py-1">This field is required</span>
        )}

        <input
          type="email"
          placeholder="name@example.com"
          value={loggedIn?.email}
          className="form-control mb-2"
          defaultValue={loggedIn?.email}
          {...register("email")}
        />

        <input
          type="text"
          value={loadService?.title}
          placeholder="service name"
          className="form-control mb-2"
          {...register("service", { required: true })}
        />

        {!serviceInfo && (
          <p className="text-warning py-1">
            please double click the button bellow to confirm. <br /> Otherwise
            we might not get your booking.
          </p>
        )}

        <input
          className="btn btn-warning"
          type="submit"
          value="Submit to pay"
        />
      </form>

      <div className="payment">
        <StripePayment setBooked={setBooked} serviceInfo={serviceInfo} />
      </div>

      {booked && (
        <p className="text-warning p-5 text-center">
          Service is booked successfully. Be patient, we'll get back to you
          soon.
        </p>
      )}
    </div>
  );
};

export default Book;
